import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tab from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabContents from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'
import { selectTab, showTabs } from '../common/tabs/tabActions'
import { create } from './billingCycleActions'

import BillingCycleList from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro'/>
                <Content>
                    <Tab>
                        <TabsHeader>
                            <TabHeader icon='bars' label='Listar' target='tabList'/>
                            <TabHeader icon='plus' label='Incluir' target='tabCreate'/>
                            <TabHeader icon='edit' label='Alterar' target='tabUpdate'/>
                            <TabHeader icon='trash-o' label='Excluir' target='tabDelete'/>
                        </TabsHeader>
                        <TabContents>
                            <TabContent id='tabList'>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                Tab tabUpdate
                            </TabContent>
                            <TabContent id='tabDelete'>
                                Tab tabDelete
                            </TabContent>
                        </TabContents>
                    </Tab>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, 
    showTabs, 
    create 
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)