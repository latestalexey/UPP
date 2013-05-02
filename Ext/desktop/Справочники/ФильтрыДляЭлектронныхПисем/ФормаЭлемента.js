﻿Ext.define('Справочники.ФильтрыДляЭлектронныхПисем.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:714px;height:423px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Фильтры для электронных писем',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:608px;top:57px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:640px;top:57px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:99px;top:33px;width:502px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Учетная запись:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:99px;top:57px;width:502px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:99px;width:347px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:123px;width:347px;height:243px;',
			height: 243,width: 347,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'НЕ',
					width:'18',
					dataIndex:'ОтрицаниеУсловия',
					flex:1,
				},
				{
					text:'Условие',
					width:'162',
					dataIndex:'Условие',
					flex:1,
				},
				{
					text:'Значение условия',
					width:'142',
					dataIndex:'ЗначениеУсловия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФильтрыДляЭлектронныхПисем/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОтрицаниеУсловия',
					},
					{
						name:'Условие',
					},
					{
						name:'ЗначениеУсловия',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:359px;top:99px;width:347px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:359px;top:123px;width:347px;height:267px;',
			height: 267,width: 347,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Действие фильтра',
					width:'120',
					dataIndex:'ДействиеФильтра',
					flex:1,
				},
				{
					text:'Группа писем',
					width:'120',
					dataIndex:'ГруппаПисем',
					flex:1,
				},
				{
					text:'Оформление',
					width:'120',
					dataIndex:'Оформление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФильтрыДляЭлектронныхПисем/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДействиеФильтра',
					},
					{
						name:'ГруппаПисем',
					},
					{
						name:'Оформление',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:714px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:714px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Соединение условий по:',
			style: 'position:absolute;left:8px;top:371px;width:127px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:141px;top:371px;width:139px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использование',
			style: 'position:absolute;left:608px;top:33px;width:98px;height:19px;',
		},
	]
});