import * as React from 'react'

export interface PropsInterface {
    /**
     * 对应Tabs的defaultActiveKey
     */
    key?: string

    /**
     * 标签名
     */
    tab?: string

    /**
     * 是否处于显示状态
     */
    active?: boolean

    [x: string]: any
}

export class Props implements PropsInterface {
    key = ''
    tab = '标签'
    active = false
}

export interface StateInterface {

}

export class State implements StateInterface {

}