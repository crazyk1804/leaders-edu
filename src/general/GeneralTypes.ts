import {ReactNode} from "react";

/**
 * flux 패턴을 위한 action
 */
export interface ACTION {
	type: string
	payload: any
	meta?: any
	error?: boolean
}

/**
 * api 호출을 통해 서버에서 보내는 응답 형식
 */
export interface ServerResponse<T> {
	isSuccess: boolean,
	body: T
}

/**
 * ReactNode 를 children 으로 갖는 타입(ContextProvider 등의 props 에 children 이 명시적이지 않아서...)
 */
export interface ReactParent {
	children?: ReactNode
}