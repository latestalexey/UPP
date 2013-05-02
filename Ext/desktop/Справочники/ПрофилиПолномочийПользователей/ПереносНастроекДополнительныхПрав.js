﻿Ext.define('Справочники.ПрофилиПолномочийПользователей.ПереносНастроекДополнительныхПрав',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перенос настроек дополнительных прав',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:470px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:454px;height:281px;',
			height: 281,width: 454,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Пользователь / группа',
					width:'231',
					dataIndex:'ПользовательГруппа',
					flex:1,
				},
				{
					text:'Профиль',
					width:'158',
					dataIndex:'Профиль',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиПолномочийПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'ПользовательГруппа',
					},
					{
						name:'Профиль',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНастройкиДополнительныхПрав',
			text: 'Настройки дополнительных прав',
			style: 'position:absolute;left:8px;top:32px;width:454px;height:19px;',
		},
	]
});