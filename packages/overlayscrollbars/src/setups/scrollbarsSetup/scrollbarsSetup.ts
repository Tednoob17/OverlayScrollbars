import { noop, on, push, runEachAndClear, selfClearTimeout } from '~/support';
import { getEnvironment } from '~/environment';
import { createScrollbarsSetupEvents } from '~/setups/scrollbarsSetup/scrollbarsSetup.events';
import { createScrollbarsSetupElements } from '~/setups/scrollbarsSetup/scrollbarsSetup.elements';
import {
  classNameScrollbarThemeNone,
  classNameScrollbarVisible,
  classNameScrollbarUnusable,
  classNameScrollbarCornerless,
  classNameScrollbarAutoHideHidden,
  classNameScrollbarHandleInteractive,
  classNameScrollbarTrackInteractive,
  classNameScrollbarRtl,
  classNameScrollbarAutoHide,
} from '~/classnames';
import { type ReadonlyOptions } from '~/options';
import type { OptionsCheckFn, PartialOptions } from '~/options';
import type { ScrollbarsSetupElementsObj } from '~/setups/scrollbarsSetup/scrollbarsSetup.elements';
import type {
  ObserversSetupState,
  ObserversSetupUpdateHints,
  Setup,
  StructureSetupState,
  StructureSetupUpdateHints,
} from '~/setups';
import type { InitializationTarget } from '~/initialization';
import type { OverflowStyle } from '~/typings';
import type { StructureSetupElementsObj } from '../structureSetup/structureSetup.elements';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ScrollbarsSetupState {}

export interface ScrollbarsSetupUpdateInfo {
  _checkOption: OptionsCheckFn;
  _changedOptions?: PartialOptions;
  _force?: boolean;
  _observersUpdateHints?: ObserversSetupUpdateHints;
  _structureUpdateHints?: StructureSetupUpdateHints;
}

export type ScrollbarsSetup = [
  ...Setup<ScrollbarsSetupUpdateInfo, ScrollbarsSetupState, void>,
  /** The elements created by the scrollbars setup. */
  ScrollbarsSetupElementsObj
];

// needed to not fire unnecessary operations for pointer events on safari which will cause side effects: https://github.com/KingSora/OverlayScrollbars/issues/560
const isHoverablePointerType = (event: PointerEvent) => event.pointerType === 'mouse';

export const createScrollbarsSetup = (
  target: InitializationTarget,
  options: ReadonlyOptions,
  observersSetupState: ObserversSetupState,
  structureSetupState: StructureSetupState,
  structureSetupElements: StructureSetupElementsObj,
  onScroll: (event: Event) => void
): ScrollbarsSetup => {
  let autoHideIsMove: boolean | undefined;
  let autoHideIsLeave: boolean | undefined;
  let autoHideNotNever: boolean | undefined;
  let mouseInHost: boolean | undefined;
  let prevTheme: string | null | undefined;
  let instanceAutoHideSuspendScrollDestroyFn = noop;
  let instanceAutoHideDelay = 0;

  const [requestMouseMoveAnimationFrame, cancelMouseMoveAnimationFrame] = selfClearTimeout();
  const [requestScrollAnimationFrame, cancelScrollAnimationFrame] = selfClearTimeout();
  const [scrollTimeout, clearScrollTimeout] = selfClearTimeout(100);
  const [auotHideMoveTimeout, clearAutoHideTimeout] = selfClearTimeout(100);
  const [autoHideSuspendTimeout, clearAutoHideSuspendTimeout] = selfClearTimeout(100);
  const [auotHideTimeout, clearAutoTimeout] = selfClearTimeout(() => instanceAutoHideDelay);
  const [elements, appendElements] = createScrollbarsSetupElements(
    target,
    structureSetupElements,
    createScrollbarsSetupEvents(options, structureSetupState)
  );
  const { _host, _scrollEventElement, _isBody } = structureSetupElements;
  const {
    _scrollbarsAddRemoveClass,
    _refreshScrollbarsHandleLength,
    _refreshScrollbarsHandleOffset,
    _refreshScrollbarsHandleOffsetTimeline,
    _refreshScrollbarsScrollbarOffsetTimeline,
    _refreshScrollbarsScrollbarOffset,
  } = elements;
  const manageAutoHideSuspension = (add: boolean) => {
    _scrollbarsAddRemoveClass(classNameScrollbarAutoHide, add, true);
    _scrollbarsAddRemoveClass(classNameScrollbarAutoHide, add, false);
  };
  const manageScrollbarsAutoHide = (removeAutoHide: boolean, delayless?: boolean) => {
    clearAutoTimeout();
    if (removeAutoHide) {
      _scrollbarsAddRemoveClass(classNameScrollbarAutoHideHidden);
    } else {
      const hide = () => _scrollbarsAddRemoveClass(classNameScrollbarAutoHideHidden, true);
      if (instanceAutoHideDelay > 0 && !delayless) {
        auotHideTimeout(hide);
      } else {
        hide();
      }
    }
  };
  const onHostMouseEnter = (event: PointerEvent) => {
    if (isHoverablePointerType(event)) {
      mouseInHost = autoHideIsLeave;
      mouseInHost && manageScrollbarsAutoHide(true);
    }
  };

  const destroyFns: (() => void)[] = [
    clearScrollTimeout,
    clearAutoTimeout,
    clearAutoHideTimeout,
    clearAutoHideSuspendTimeout,
    cancelScrollAnimationFrame,
    cancelMouseMoveAnimationFrame,
    () => instanceAutoHideSuspendScrollDestroyFn(),

    on(_host, 'pointerover', onHostMouseEnter, { _once: true }),
    on(_host, 'pointerenter', onHostMouseEnter),
    on(_host, 'pointerleave', (event: PointerEvent) => {
      if (isHoverablePointerType(event)) {
        mouseInHost = false;
        autoHideIsLeave && manageScrollbarsAutoHide(false);
      }
    }),
    on(_host, 'pointermove', (event: PointerEvent) => {
      isHoverablePointerType(event) &&
        autoHideIsMove &&
        requestMouseMoveAnimationFrame(() => {
          clearScrollTimeout();
          manageScrollbarsAutoHide(true);
          auotHideMoveTimeout(() => {
            autoHideIsMove && manageScrollbarsAutoHide(false);
          });
        });
    }),
    on(_scrollEventElement, 'scroll', (event) => {
      requestScrollAnimationFrame(() => {
        _refreshScrollbarsHandleOffset(structureSetupState);

        autoHideNotNever && manageScrollbarsAutoHide(true);
        scrollTimeout(() => {
          autoHideNotNever && !mouseInHost && manageScrollbarsAutoHide(false);
        });
      });

      onScroll(event);

      _refreshScrollbarsScrollbarOffset();
    }),
  ];

  return [
    () => {
      push(destroyFns, appendElements());
      return () => runEachAndClear(destroyFns);
    },
    ({ _checkOption, _force, _observersUpdateHints, _structureUpdateHints }) => {
      const { _overflowEdgeChanged, _overflowAmountChanged, _overflowStyleChanged } =
        _structureUpdateHints || {};
      const { _directionChanged, _appear } = _observersUpdateHints || {};
      const { _nativeScrollbarsOverlaid } = getEnvironment();
      const { _directionIsRTL } = observersSetupState;
      const { _overflowAmount, _overflowStyle, _hasOverflow } = structureSetupState;
      const [showNativeOverlaidScrollbarsOption, showNativeOverlaidScrollbarsChanged] =
        _checkOption('showNativeOverlaidScrollbars');
      const [theme, themeChanged] = _checkOption('scrollbars.theme');
      const [visibility, visibilityChanged] = _checkOption('scrollbars.visibility');
      const [autoHide, autoHideChanged] = _checkOption('scrollbars.autoHide');
      const [autoHideSuspend, autoHideSuspendChanged] = _checkOption('scrollbars.autoHideSuspend');
      const [autoHideDelay] = _checkOption('scrollbars.autoHideDelay');
      const [dragScroll, dragScrollChanged] = _checkOption('scrollbars.dragScroll');
      const [clickScroll, clickScrollChanged] = _checkOption('scrollbars.clickScroll');

      const trulyAppeared = _appear && !_force;
      const hasOverflow = _hasOverflow.x || _hasOverflow.y;
      const updateScrollbars = _overflowEdgeChanged || _overflowAmountChanged || _directionChanged;
      const updateVisibility = _overflowStyleChanged || visibilityChanged;
      const showNativeOverlaidScrollbars =
        showNativeOverlaidScrollbarsOption &&
        _nativeScrollbarsOverlaid.x &&
        _nativeScrollbarsOverlaid.y;

      const setScrollbarVisibility = (overflowStyle: OverflowStyle, isHorizontal: boolean) => {
        const isVisible =
          visibility === 'visible' || (visibility === 'auto' && overflowStyle === 'scroll');
        _scrollbarsAddRemoveClass(classNameScrollbarVisible, isVisible, isHorizontal);
        return isVisible;
      };

      instanceAutoHideDelay = autoHideDelay;

      if (trulyAppeared) {
        if (autoHideSuspend && hasOverflow) {
          manageAutoHideSuspension(false);
          instanceAutoHideSuspendScrollDestroyFn();
          autoHideSuspendTimeout(() => {
            instanceAutoHideSuspendScrollDestroyFn = on(
              _scrollEventElement,
              'scroll',
              manageAutoHideSuspension.bind(0, true),
              {
                _once: true,
              }
            );
          });
        } else {
          manageAutoHideSuspension(true);
        }
      }

      if (showNativeOverlaidScrollbarsChanged) {
        _scrollbarsAddRemoveClass(classNameScrollbarThemeNone, showNativeOverlaidScrollbars);
      }

      if (themeChanged) {
        _scrollbarsAddRemoveClass(prevTheme);
        _scrollbarsAddRemoveClass(theme, true);

        prevTheme = theme;
      }

      if (autoHideSuspendChanged && !autoHideSuspend) {
        manageAutoHideSuspension(true);
      }

      if (autoHideChanged) {
        autoHideIsMove = autoHide === 'move';
        autoHideIsLeave = autoHide === 'leave';
        autoHideNotNever = autoHide !== 'never';
        manageScrollbarsAutoHide(!autoHideNotNever, true);
      }

      if (dragScrollChanged) {
        _scrollbarsAddRemoveClass(classNameScrollbarHandleInteractive, dragScroll);
      }

      if (clickScrollChanged) {
        _scrollbarsAddRemoveClass(classNameScrollbarTrackInteractive, clickScroll);
      }

      if (updateVisibility) {
        const xVisible = setScrollbarVisibility(_overflowStyle.x, true);
        const yVisible = setScrollbarVisibility(_overflowStyle.y, false);
        const hasCorner = xVisible && yVisible;

        _scrollbarsAddRemoveClass(classNameScrollbarCornerless, !hasCorner);
      }

      if (updateScrollbars) {
        _refreshScrollbarsHandleLength(structureSetupState);
        _refreshScrollbarsHandleOffset(structureSetupState);
        _refreshScrollbarsHandleOffsetTimeline(structureSetupState);
        _refreshScrollbarsScrollbarOffsetTimeline(structureSetupState);
        _refreshScrollbarsScrollbarOffset();

        _scrollbarsAddRemoveClass(classNameScrollbarUnusable, !_overflowAmount.x, true);
        _scrollbarsAddRemoveClass(classNameScrollbarUnusable, !_overflowAmount.y, false);
        _scrollbarsAddRemoveClass(classNameScrollbarRtl, _directionIsRTL && !_isBody);
      }
    },
    {},
    elements,
  ];
};
