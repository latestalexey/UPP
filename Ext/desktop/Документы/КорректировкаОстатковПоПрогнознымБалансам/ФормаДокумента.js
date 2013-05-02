﻿Ext.define('Документы.КорректировкаОстатковПоПрогнознымБалансам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:530px;height:493px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка остатков по прогнозным балансам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата остатков:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:422px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:393px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:393px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:441px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:441px;width:428px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:143px;width:514px;height:25px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:168px;width:514px;height:220px;',
			height: 220,width: 514,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет',
					width:'80',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'120',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'120',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'120',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Валюта',
					width:'80',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма упр.',
					width:'120',
					dataIndex:'СуммаУпр',
					flex:1,
				},
				{
					text:'Валютная сумма',
					width:'120',
					dataIndex:'ВалютнаяСумма',
					flex:1,
				},
				{
					text:'Сумма сценария',
					width:'120',
					dataIndex:'СуммаСценария',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаОстатковПоПрогнознымБалансам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Счет',
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
						name:'Валюта',
					},
					{
						name:'СуммаУпр',
					},
					{
						name:'ВалютнаяСумма',
					},
					{
						name:'СуммаСценария',
					},
					{
						name:'Количество',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:530px;height:25px;',
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
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:468px;width:530px;height:25px;',
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
			name: 'НадписьБалансУпр',
			text: 'Баланс (сумма упр.):',
			style: 'position:absolute;left:336px;top:393px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБалансСценарий',
			text: 'Баланс (сумма упр.):',
			style: 'position:absolute;left:336px;top:417px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:94px;top:417px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:417px;width:84px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только по счетам, указанным в табличной части',
			style: 'position:absolute;left:13px;top:102px;width:271px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По всем счетам',
			style: 'position:absolute;left:291px;top:102px;width:110px;height:15px;',
		},
	]
});