﻿Ext.define('Справочники.СпособыОтраженияРасходовПоАмортизации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения расходов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:180px;',
			height: 180,width: 588,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'222',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'90',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'232',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыОтраженияРасходовПоАмортизации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
					{
						name:'СпособРаспределенияЗатратНаВыпуск',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:244px;width:588px;height:154px;',
			height: 154,width: 588,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
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
					text:'Статья затрат',
					width:'97',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат',
					width:'83',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'83',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Характер затрат',
					width:'74',
					dataIndex:'ХарактерЗатрат',
					flex:1,
				},
				{
					text:'Вид аналитики',
					width:'102',
					dataIndex:'ВидАналитики',
					flex:1,
				},
				{
					text:'Вид аналитики (доп)',
					width:'102',
					dataIndex:'ВидАналитикиДоп',
					flex:1,
				},
				{
					text:'Вид субконто 1',
					width:'69',
					dataIndex:'ВидСубконто1',
					flex:1,
				},
				{
					text:'Вид субконто 2',
					width:'69',
					dataIndex:'ВидСубконто2',
					flex:1,
				},
				{
					text:'Вид субконто 3',
					width:'69',
					dataIndex:'ВидСубконто3',
					flex:1,
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'100',
					dataIndex:'ВидСубконтоНУ1',
					flex:1,
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'100',
					dataIndex:'ВидСубконтоНУ2',
					flex:1,
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'100',
					dataIndex:'ВидСубконтоНУ3',
					flex:1,
				},
				{
					text:'Аналитика',
					width:'99',
					dataIndex:'Аналитика',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'99',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'99',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'99',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'99',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто 1 (НУ)',
					width:'99',
					dataIndex:'СубконтоНУ1',
					flex:1,
				},
				{
					text:'Субконто 2 (НУ)',
					width:'99',
					dataIndex:'СубконтоНУ2',
					flex:1,
				},
				{
					text:'Субконто 3 (НУ)',
					width:'99',
					dataIndex:'СубконтоНУ3',
					flex:1,
				},
				{
					text:'Продукция',
					width:'99',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'99',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'99',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Объект строительства',
					width:'99',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Способ строительства',
					width:'100',
					dataIndex:'СпособСтроительства',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'102',
					dataIndex:'Коэффициент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыОтраженияРасходовПоАмортизации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'ХарактерЗатрат',
					},
					{
						name:'ВидАналитики',
					},
					{
						name:'ВидАналитикиДоп',
					},
					{
						name:'ВидСубконто1',
					},
					{
						name:'ВидСубконто2',
					},
					{
						name:'ВидСубконто3',
					},
					{
						name:'ВидСубконтоНУ1',
					},
					{
						name:'ВидСубконтоНУ2',
					},
					{
						name:'ВидСубконтоНУ3',
					},
					{
						name:'Аналитика',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто3',
					},
					{
						name:'СубконтоНУ1',
					},
					{
						name:'СубконтоНУ2',
					},
					{
						name:'СубконтоНУ3',
					},
					{
						name:'Продукция',
					},
					{
						name:'ХарактеристикаПродукции',
					},
					{
						name:'СерияПродукции',
					},
					{
						name:'ОбъектСтроительства',
					},
					{
						name:'СпособСтроительства',
					},
					{
						name:'Коэффициент',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Список способов:',
			style: 'position:absolute;left:8px;top:225px;width:588px;height:13px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});