﻿Ext.define('Документы.ИзменениеЗаказаПокупателя.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение заказов покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:624px;height:380px;',
			height: 380,width: 624,
			columns:
			[
				{
					text:' ',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'120',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'129',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Организация',
					width:'138',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'130',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеЗаказаПокупателя/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'СуммаДокумента',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Организация',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Анализ',
				},
			]
		},
	]
});