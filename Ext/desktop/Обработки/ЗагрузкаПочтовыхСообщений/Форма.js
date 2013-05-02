﻿Ext.define('Обработки.ЗагрузкаПочтовыхСообщений.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Загрузка почтовых сообщений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:391px;width:643px;height:25px;',
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:627px;height:302px;',
			height: 302,width: 627,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Вложения',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'100',
					dataIndex:'ДатаПолучения',
					flex:1,
				},
				{
					text:'Копии',
					width:'117',
					dataIndex:'Копии',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'110',
					dataIndex:'ОтправительПредставление',
					flex:1,
				},
				{
					text:'Получатели',
					width:'106',
					dataIndex:'Кому',
					flex:1,
				},
				{
					text:'Тема',
					width:'146',
					dataIndex:'Тема',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаПочтовыхСообщений/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Вложения',
					},
					{
						name:'ДатаПолучения',
					},
					{
						name:'Копии',
					},
					{
						name:'ОтправительПредставление',
					},
					{
						name:'Кому',
					},
					{
						name:'Тема',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:627px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Учетная запись:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗапись',
			style: 'position:absolute;left:98px;top:33px;width:385px;height:19px;',
		},
	]
});