import React, { useState } from 'react';
import TabsControl from './tabs-control.jsx';
import Tab from './tab.jsx';


const DEFAULT_STATE = {
  activeIndex: 0,
  tabs: [
    {
      tabControlText: 'create',
      tabTitle: {
        text: 'all your creative tasks',
        specialText: 'simplified with AI.',
      },
      text: 'Get content ideas, generate captions that respects brand’s tone of voice, design and plan your publications all in one place',
      replaces: [
        'Feedly', 'Canva', 'Copy.ai', 'Hootsuite'
      ],
      imgSrc: './img/tabs/tab1.png',
      imgSrcSet: './img/tabs/tab1@2x.png 2x'
    },
    {
      tabControlText: 'manage',
      tabTitle: {
        text: 'transparency over all the',
        specialText: 'work ahead of you.',
      },
      text: 'Plan, track, and manage all your work with project management that flexes to your team\'s needs.',
      replaces: [
        'Asana', 'Monday',
      ],
      imgSrc: './img/tabs/tab2.png',
      imgSrcSet: './img/tabs/tab2@2x.png 2x'
    },
    {
      tabControlText: 'automate',
      tabTitle: {
        text: 'your entire workflow',
        specialText: 'on autopilot.',
      },
      text: 'Eliminate the busywork and focus on what matters with hundreds of Automations. Automatically assign tasks, post comments, update statuses, and sync with other tools.',
      replaces: [
        'UiPath', 'Zapier', 'Airtable'
      ],
      imgSrc: './img/tabs/tab3.png',
      imgSrcSet: './img/tabs/tab3@2x.png 2x'
    },
    {
      tabControlText: 'chat',
      tabTitle: {
        text: 'one single chat',
        specialText: 'to rule them all.',
      },
      text: 'Work smarter as a team with real-time chat. All your client-facing conversations are automatically bridged to Whatsapp',
      replaces: [
        'Slack', 'MS Teams', 'Whatsapp',
      ],
      imgSrc: './img/tabs/tab4.png',
      imgSrcSet: './img/tabs/tab4@2x.png 2x'
    },
    {
      tabControlText: 'delegate',
      tabTitle: {
        text: 'find the right teammates to',
        specialText: 'get things done.',
      },
      text: 'Access the largest network of marketing professional to delegate your tasks and automatically orchestrate payment across teams and clients',
      replaces: [
        'Upwork', 'Malt', 'Fiverr',
      ],
      imgSrc: './img/tabs/tab5.png',
      imgSrcSet: './img/tabs/tab5@2x.png 2x'
    },
  ]
}

export default function Tabs() {
  const [state, setState] = useState(DEFAULT_STATE);


  function handleTabChange(index) {
    setState(Object.assign({}, state, { activeIndex: index }));
    console.log(state);
  }

  return (
    <div className="tabs capabilities__tabs">
      <div className="tabs__controls capabilities__controls">
        {state.tabs.map((it, index) => <TabsControl
          onClick={handleTabChange}
          text={it.tabControlText}
          isActive={state.activeIndex === index}
          index={index}
          key={index}
        />)}
      </div>
      <div className="tabs__container">
        <ul className="tabs__list" style={{ transform: `translateX(${-100 * state.activeIndex}%)` }}>
          {state.tabs.map((it, index) => <Tab tab={it} key={index} />)}
        </ul>
      </div>
    </div>
  )
}
