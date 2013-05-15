﻿Ext.define('Справочники.ТехнологическиеОперации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:418px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Технологические операции',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:318px;top:59px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:346px;top:59px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:59px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:59px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнаяСтатьяЗатратНаПроизводство',
			text: 'Основная статья затрат на производство:',
			style: 'position:absolute;left:8px;top:87px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОсновнаяСтатьяЗатратНаПроизводство',
			style: 'position:absolute;left:233px;top:87px;width:177px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияЗарплатыВБухучете',
			text: 'Способ отражения зарплаты в бухучете:',
			style: 'position:absolute;left:8px;top:160px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособОтраженияЗарплатыВБухучете',
			style: 'position:absolute;left:233px;top:160px;width:177px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнаяНоменклатурнаяГруппа',
			text: 'Основная номенклатурная группа:',
			style: 'position:absolute;left:8px;top:135px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОсновнаяНоменклатурнаяГруппа',
			style: 'position:absolute;left:233px;top:135px;width:177px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасценка',
			text: 'Расценка:',
			style: 'position:absolute;left:8px;top:235px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Расценка',
			style: 'position:absolute;left:233px;top:235px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазоваяЕдиницаИзмерения',
			text: 'Базовая единица измерения:',
			style: 'position:absolute;left:8px;top:185px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:233px;top:185px;width:177px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:210px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Валюта',
			style: 'position:absolute;left:233px;top:210px;width:177px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНормаВремени',
			text: 'Норма времени:',
			style: 'position:absolute;left:8px;top:260px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НормаВремени',
			style: 'position:absolute;left:233px;top:260px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатратНаВыпуск',
			text: 'Способ распределения затрат на выпуск:',
			style: 'position:absolute;left:8px;top:111px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОсновнойСпособРаспределенияЗатратНаВыпуск',
			style: 'position:absolute;left:233px;top:111px;width:177px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:33px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:316px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициент',
			text: 'Коэффициент:',
			style: 'position:absolute;left:8px;top:284px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Коэффициент',
			style: 'position:absolute;left:233px;top:284px;width:83px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:418px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:418px;height:25px;',
			dock: 'bottom',
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
	]
});