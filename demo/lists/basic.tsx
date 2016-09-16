import * as React from 'react'
import {Tabs, TabPanel} from '../../src'

export default class Demo extends React.Component <any, any> {
    handleChange(value: string) {
        console.log('回调', value)
    }

    render() {
        return (
            <Tabs defaultActiveKey="1"
                  onChange={this.handleChange.bind(this)}>
                <TabPanel tab="选项卡一"
                          activeKey="1">选项卡一内容</TabPanel>
                <TabPanel tab="选项卡二"
                          activeKey="2">选项卡二内容</TabPanel>
                <TabPanel tab="选项卡三"
                          activeKey="3">选项卡三内容</TabPanel>
            </Tabs>
        )
    }
}