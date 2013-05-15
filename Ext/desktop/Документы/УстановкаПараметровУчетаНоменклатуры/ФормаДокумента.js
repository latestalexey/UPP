﻿Ext.define('Документы.УстановкаПараметровУчетаНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:388px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка параметров учета номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:130px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:148px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:312px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:312px;width:696px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:336px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:336px;width:696px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:272px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияДействия',
			text: '',
			style: 'position:absolute;left:288px;top:33px;width:504px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:784px;height:244px;',
			height: 244,width: 784,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:188px;',
			height: 188,width: 770,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Принадлежность номенклатуры',
					width:'92',
					dataIndex:'ПринадлежностьНоменклатуры',
					flex:1,
				},
				{
					text:'Учет запасов',
					width:'76',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Учет доходов',
					width:'76',
					dataIndex:'СчетДоходовБУ',
					flex:1,
				},
				{
					text:'Учет расходов',
					width:'76',
					dataIndex:'СчетРасходовБУ',
					flex:1,
				},
				{
					text:'Учет запасов (НУ)',
					width:'76',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Учет доходов (НУ)',
					width:'76',
					dataIndex:'СчетДоходовНУ',
					flex:1,
				},
				{
					text:'Учет расходов (НУ)',
					width:'76',
					dataIndex:'СчетРасходовНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаПараметровУчетаНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ПринадлежностьНоменклатуры',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетДоходовБУ',
					},
					{
						name:'СчетРасходовБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'СчетДоходовНУ',
					},
					{
						name:'СчетРасходовНУ',
					},
				]
			},
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:188px;',
			height: 188,width: 770,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Учет доходов',
					width:'76',
					dataIndex:'СчетДоходовБУ',
					flex:1,
				},
				{
					text:'Учет расходов',
					width:'76',
					dataIndex:'СчетРасходовБУ',
					flex:1,
				},
				{
					text:'Счет затрат',
					width:'76',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Учет доходов (НУ)',
					width:'76',
					dataIndex:'СчетДоходовНУ',
					flex:1,
				},
				{
					text:'Учет расходов (НУ)',
					width:'76',
					dataIndex:'СчетРасходовНУ',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'76',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'100',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'100',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Учет затрат по заказам',
					width:'70',
					dataIndex:'ВестиУчетЗатратПоЗаказам',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаПараметровУчетаНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'СчетДоходовБУ',
					},
					{
						name:'СчетРасходовБУ',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетДоходовНУ',
					},
					{
						name:'СчетРасходовНУ',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'ВестиУчетЗатратПоЗаказам',
					},
				]
			},
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:45px;width:770px;height:173px;',
			height: 173,width: 770,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация',
					width:'140',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Способ суммовой оценки',
					width:'140',
					dataIndex:'СпособРасчета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаПараметровУчетаНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'СпособРасчета',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:29px;width:770px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать параметры учета при заполнении реквизитов документов',
			style: 'position:absolute;left:6px;top:6px;width:392px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:363px;width:800px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
	]
});