import * as React from 'react'

export interface PropsInterface {
    /**
     * 设置默认打开哪个tab,与tabPanel的key对应,只有初始化有效
     */
    defaultActiveKey?: string|number

    /**
     * 同defaultActiveKey,但是可以让其受外部控制
     */
    activeKey?: string|number

    /**
     * 切换tab时的回调
     */
    onChange?: (key?: string|number)=> void

    [x: string]: any
}

export class Props implements PropsInterface {
    defaultActiveKey = null as any
    activeKey = null as any
    onChange = ()=> {
    }
}

export interface StateInterface {
    activeKey?: string|number
    moveBarStyle?: any
    isForward?: boolean
}

export class State implements StateInterface {
    moveBarStyle = {}
    isForward = false
}