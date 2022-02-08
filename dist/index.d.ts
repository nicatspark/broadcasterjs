export declare type listenerProp<T extends unknown> = [
    type: string,
    listener?: T,
    settings?: SettingsType
];
export declare type ListenerProps = <T extends unknown>([type, listener, settings,]: listenerProp<T>) => void;
export interface ReturnType {
    on: ListenerProps;
    once: ListenerProps;
    off: ListenerProps;
    emit: (type: string, detail?: unknown) => boolean;
}
export interface SettingsType {
    debug?: boolean;
    debugGlobal?: boolean;
    allowDoublettesSubscribers?: boolean;
    useLatestSubscriberScope?: boolean;
    suppresDebug?: boolean;
}
declare const broadcast: ReturnType;
export { broadcast };
