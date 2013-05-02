﻿Ext.define('Обработки.КалендарныйПланЗакупок.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Календарный план закупок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Помощник заполнения',
				},
				'-',
				{
					text:'Помощник установки соответствия заказов покупателей и заказов поставщикам',
				},
					]
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Помощник заполнения',
				},
				'-',
				{
					text:'Помощник установки соответствия заказов покупателей и заказов поставщикам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:700px;height:25px;',
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
			style: 'position:absolute;left:8px;top:124px;width:684px;height:280px;',
			height: 280,width: 684,
			columns:
			[
				{
					text:'Номенклатура. Контрагент. Заказ.',
					width:'220',
					dataIndex:'НоменклатураКонтрагентЗаказ',
					flex:1,
				},
				{
					text:'Требуемое кол.',
					width:'88',
					dataIndex:'НеобходимоеКоличество',
					flex:1,
				},
				{
					text:'Заказанное кол.',
					width:'88',
					dataIndex:'ЗаказанноеКоличество',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'ЦенаУпрУчета',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаУпрУчета',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'128',
					dataIndex:'СуммаВзаиморасчетовЗаказаПредставление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарныйПланЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НоменклатураКонтрагентЗаказ',
					},
					{
						name:'НеобходимоеКоличество',
					},
					{
						name:'ЗаказанноеКоличество',
					},
					{
						name:'ЦенаУпрУчета',
					},
					{
						name:'СуммаУпрУчета',
					},
					{
						name:'СуммаВзаиморасчетовЗаказаПредставление',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Период планирования, с:',
			style: 'position:absolute;left:8px;top:33px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:143px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания',
			text: 'по:',
			style: 'position:absolute;left:225px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:243px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:509px;top:57px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУровеньРазворотаДерева',
			text: 'Уровень разворота дерева:',
			style: 'position:absolute;left:364px;top:57px;width:144px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:684px;height:24px;',
			items:
			[
				'-',
				{
					text:'Новый заказ',
				},
				'-',
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Настройка отбора',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Список заказов',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:143px;top:57px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокОтображения',
			text: 'Порядок отображения:',
			style: 'position:absolute;left:8px;top:57px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:325px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтветственный',
			style: 'position:absolute;left:509px;top:33px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственныйЗаЗакупки',
			text: 'Ответственный за закупки:',
			style: 'position:absolute;left:364px;top:33px;width:144px;height:19px;',
		},
	]
});