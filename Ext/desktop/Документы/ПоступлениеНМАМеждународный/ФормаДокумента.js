﻿Ext.define('Документы.ПоступлениеНМАМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:324px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:324px;width:559px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:83px;width:638px;height:24px;',
			items:
			[
				{
					text:'Заполнить за период',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:107px;width:638px;height:211px;',
			height: 211,width: 638,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'НМА',
					width:'108',
					dataIndex:'НематериальныйАктив',
					flex:1,
				},
				{
					text:'Учитывать как НМА',
					width:'100',
					dataIndex:'УчитыватьКакНМА',
					flex:1,
				},
				{
					text:'Дата принятия к учету',
					width:'100',
					dataIndex:'ДатаПринятияКУчету',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'92',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Срок полезного использования',
					width:'92',
					dataIndex:'СрокПолезногоИспользования',
					flex:1,
				},
				{
					text:'Счет снижения стоимости',
					width:'92',
					dataIndex:'СчетСниженияСтоимости',
					flex:1,
				},
				{
					text:'Начислять амортизацию',
					width:'100',
					dataIndex:'НачислятьАмортизацию',
					flex:1,
				},
				{
					text:'Метод начисления амортизации',
					width:'100',
					dataIndex:'МетодНачисленияАмортизации',
					flex:1,
				},
				{
					text:'Счет начисления амортизации',
					width:'100',
					dataIndex:'СчетНачисленияАмортизации',
					flex:1,
				},
				{
					text:'Счет затрат',
					width:'100',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'100',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Предполагаемый объем продукции',
					width:'98',
					dataIndex:'ПредполагаемыйОбъемПродукции',
					flex:1,
				},
				{
					text:'Коэфф. ускорения',
					width:'100',
					dataIndex:'КоэффициентУскорения',
					flex:1,
				},
				{
					text:'Сумма начисленной амортизации',
					width:'100',
					dataIndex:'СуммаНачисленнойАмортизации',
					flex:1,
				},
				{
					text:'Новый счет учета',
					width:'100',
					dataIndex:'СчетУчетаНовый',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'100',
					dataIndex:'Субконто1Нов',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'100',
					dataIndex:'Субконто2Нов',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'100',
					dataIndex:'Субконто3Нов',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'100',
					dataIndex:'ПервоначальнаяСтоимость',
					flex:1,
				},
				{
					text:'Ликвидационная стоимость',
					width:'100',
					dataIndex:'ЛиквидационнаяСтоимость',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеНМАМеждународный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НематериальныйАктив',
					},
					{
						name:'УчитыватьКакНМА',
					},
					{
						name:'ДатаПринятияКУчету',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'СрокПолезногоИспользования',
					},
					{
						name:'СчетСниженияСтоимости',
					},
					{
						name:'НачислятьАмортизацию',
					},
					{
						name:'МетодНачисленияАмортизации',
					},
					{
						name:'СчетНачисленияАмортизации',
					},
					{
						name:'СчетЗатрат',
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
						name:'ПредполагаемыйОбъемПродукции',
					},
					{
						name:'КоэффициентУскорения',
					},
					{
						name:'СуммаНачисленнойАмортизации',
					},
					{
						name:'СчетУчетаНовый',
					},
					{
						name:'Субконто1Нов',
					},
					{
						name:'Субконто2Нов',
					},
					{
						name:'Субконто3Нов',
					},
					{
						name:'Сумма',
					},
					{
						name:'ПервоначальнаяСтоимость',
					},
					{
						name:'ЛиквидационнаяСтоимость',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
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
			style: 'position:absolute;left:0px;top:351px;width:654px;height:25px;',
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
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Период  с:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:426px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'по:',
			style: 'position:absolute;left:516px;top:33px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:533px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:625px;top:33px;width:19px;height:19px;',
		},
	]
});