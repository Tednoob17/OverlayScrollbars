import { useEffect, useMemo, useRef } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';
import type { PartialOptions, InitializationTarget, EventListeners } from 'overlayscrollbars';

export interface UseOverlayScrollbarsParams {
  /** OverlayScrollbars options. */
  options?: PartialOptions;
  /** OverlayScrollbars events. */
  events?: EventListeners;
}

export type UseOverlayScrollbarsInitialization = (
  target: InitializationTarget
) => OverlayScrollbars;

export type UseOverlayScrollbarsInstance = () => OverlayScrollbars | null;

/**
 * Hook for advanced usage of OverlayScrollbars. (When the OverlayScrollbarsComponent is not enough)
 * @param params Parameters for customization.
 * @returns A tuple with two values:
 * The first value is the initialization function, it takes one argument which is the `InitializationTarget` and returns the OverlayScrollbars instance.
 * The second value is a function which returns the current OverlayScrollbars instance or `null` if not initialized.
 */
export const useOverlayScrollbars = (
  params?: UseOverlayScrollbarsParams
): [UseOverlayScrollbarsInitialization, UseOverlayScrollbarsInstance] => {
  const { options, events } = params || {};
  const osInstanceRef = useRef<OverlayScrollbars | null>(null);
  const offInitialEventsRef = useRef<(() => void) | void>();
  const optionsRef = useRef<PartialOptions>();
  const eventsRef = useRef<EventListeners>();

  useEffect(() => {
    const { current: instance } = osInstanceRef;
    if (OverlayScrollbars.valid(instance) && options) {
      instance.options(options, true);
    }
  }, [options]);

  useEffect(() => {
    const { current: instance } = osInstanceRef;
    const { current: offInitialEvents } = offInitialEventsRef;
    if (OverlayScrollbars.valid(instance) && events) {
      offInitialEvents && (offInitialEventsRef.current = offInitialEvents()); // once called assign it to undefined so its not called again
      return instance.on(events);
    }
  }, [events]);

  optionsRef.current = options;
  eventsRef.current = events;

  return useMemo<[UseOverlayScrollbarsInitialization, UseOverlayScrollbarsInstance]>(
    () => [
      (target: InitializationTarget): OverlayScrollbars => {
        // if already initialized return the current instance
        const presentInstance = osInstanceRef.current;
        if (OverlayScrollbars.valid(presentInstance)) {
          return presentInstance;
        }

        const currOptions = optionsRef.current || {};
        const currEvents = eventsRef.current || {};
        const osInstance = (osInstanceRef.current = OverlayScrollbars(
          target,
          currOptions,
          currEvents
        ));

        offInitialEventsRef.current = osInstance.on(currEvents);

        return osInstance;
      },
      () => osInstanceRef.current,
    ],
    []
  );
};