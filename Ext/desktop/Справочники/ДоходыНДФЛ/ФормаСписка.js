﻿Ext.define('Справочники.ДоходыНДФЛ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:680px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Коды доходов НДФЛ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:664px;height:279px;',
			height: 279,width: 664,
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
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'243',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Ставка',
					width:'60',
					dataIndex:'СтавкаНалогообложения',
					flex:1,
				},
				{
					text:'Код для отчетности',
					width:'60',
					dataIndex:'КодДляОтчетности',
					flex:1,
				},
				{
					text:'Не облагается у налогового агента',
					width:'80',
					dataIndex:'НеОблагаетсяУНалоговогоАгента',
					flex:1,
				},
				{
					text:'Не отражается в отчетности с 2010 г.',
					width:'80',
					dataIndex:'НеОтражаетсяВОтчетности2010',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоходыНДФЛ/ВыбратьПоСсылке/100'},
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
						name:'СтавкаНалогообложения',
					},
					{
						name:'КодДляОтчетности',
					},
					{
						name:'НеОблагаетсяУНалоговогоАгента',
					},
					{
						name:'НеОтражаетсяВОтчетности2010',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});