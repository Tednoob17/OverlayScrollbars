import { isFunction, isHTMLElement, isNull, isUndefined } from 'support';
import type { StructureInitialization } from 'setups/structureSetup';
import type { ScrollbarsInitialization } from 'setups/scrollbarsSetup';
import { getEnvironment } from 'environment';
import { DeepPartial } from 'typings';
import { StructureSetupElementsObj } from 'setups/structureSetup/structureSetup.elements';

type StaticInitialization = HTMLElement | false | null;
type DynamicInitialization = HTMLElement | boolean | null;

export type InitializationTargetElement = HTMLElement | HTMLTextAreaElement;

export type Initialization = Omit<StructureInitialization, 'target'> &
  ScrollbarsInitialization & {
    cancel: {
      nativeScrollbarsOverlaid: boolean;
      body: boolean | null;
    };
  };

export type InitializationTargetObject = DeepPartial<Initialization> &
  Pick<StructureInitialization, 'target'>;

export type InitializationTarget = InitializationTargetElement | InitializationTargetObject;

/**
 * Static elements MUST be present.
 * With false, null or undefined the element will be generated, otherwise the specified element is taken.
 */
export type StaticInitializationElement<Args extends any[]> =
  | ((...args: Args) => StaticInitialization)
  | StaticInitialization;

/**
 * Dynamic element CAN be present.
 * If its a element the element will be taken as the repsective element.
 * With true the element will be generated.
 * With false, null or undefined the element won't be generated.
 */
export type DynamicInitializationElement<Args extends any[]> =
  | ((...args: Args) => DynamicInitialization)
  | DynamicInitialization;

export type FallbackInitializtationElement<
  InitElm extends StaticInitializationElement<any> | DynamicInitializationElement<any>
> = Extract<InitElm, (...args: any[]) => any> extends (...args: infer P) => any
  ? (...args: P) => HTMLElement
  : never;

const resolveInitialization = <T>(value: any, args: any): T =>
  isFunction(value) ? value.apply(0, args) : value;

const staticInitializationElement = <T extends StaticInitializationElement<any>>(
  args: Parameters<Extract<T, (...args: any[]) => any>>,
  fallbackStaticInitializationElement: FallbackInitializtationElement<T>,
  defaultStaticInitializationElementStrategy: T,
  staticInitializationElementValue?: T
): HTMLElement => {
  const staticInitialization = isUndefined(staticInitializationElementValue)
    ? defaultStaticInitializationElementStrategy
    : staticInitializationElementValue;
  const resolvedInitialization = resolveInitialization<StaticInitialization>(
    staticInitialization,
    args
  );
  return resolvedInitialization || fallbackStaticInitializationElement();
};

const dynamicInitializationElement = <T extends DynamicInitializationElement<any>>(
  args: Parameters<Extract<T, (...args: any[]) => any>>,
  fallbackDynamicInitializationElement: FallbackInitializtationElement<T>,
  defaultDynamicInitializationElementStrategy: T,
  dynamicInitializationElementValue?: T
): HTMLElement | false => {
  const dynamicInitialization = isUndefined(dynamicInitializationElementValue)
    ? defaultDynamicInitializationElementStrategy
    : dynamicInitializationElementValue;
  const resolvedInitialization = resolveInitialization<DynamicInitialization>(
    dynamicInitialization,
    args
  );
  return (
    !!resolvedInitialization &&
    (isHTMLElement(resolvedInitialization)
      ? resolvedInitialization
      : fallbackDynamicInitializationElement())
  );
};

const cancelInitialization = (
  cancelInitializationValue: DeepPartial<Initialization['cancel']> | false | null | undefined,
  structureSetupElements: StructureSetupElementsObj
): boolean => {
  const { nativeScrollbarsOverlaid, body } = cancelInitializationValue || {};
  const { _isBody, _viewportIsTarget } = structureSetupElements;
  const { _getDefaultInitialization, _nativeScrollbarsOverlaid } = getEnvironment();
  const { nativeScrollbarsOverlaid: defaultNativeScrollbarsOverlaid, body: defaultbody } =
    _getDefaultInitialization().cancel;

  const resolvedNativeScrollbarsOverlaid =
    nativeScrollbarsOverlaid ?? defaultNativeScrollbarsOverlaid;
  const resolvedDocumentScrollingElement = isUndefined(body) ? defaultbody : body;

  const finalNativeScrollbarsOverlaid =
    (_nativeScrollbarsOverlaid.x || _nativeScrollbarsOverlaid.y) &&
    resolvedNativeScrollbarsOverlaid;
  const finalDocumentScrollingElement =
    _isBody &&
    (isNull(resolvedDocumentScrollingElement)
      ? !_viewportIsTarget
      : resolvedDocumentScrollingElement);

  return !!finalNativeScrollbarsOverlaid || !!finalDocumentScrollingElement;
};

export { staticInitializationElement, dynamicInitializationElement, cancelInitialization };
