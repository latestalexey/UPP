﻿Ext.define('Справочники.Банки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:362px;height:219px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Банк',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'БИК:',
			style: 'position:absolute;left:232px;top:85px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:274px;top:85px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:61px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:61px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:8px;top:85px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррСчет',
			style: 'position:absolute;left:94px;top:85px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГород',
			text: 'Город:',
			style: 'position:absolute;left:8px;top:117px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Город',
			style: 'position:absolute;left:94px;top:117px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес:',
			style: 'position:absolute;left:8px;top:142px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Адрес',
			style: 'position:absolute;left:94px;top:142px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефоны',
			text: 'Телефоны:',
			style: 'position:absolute;left:8px;top:167px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефоны',
			style: 'position:absolute;left:94px;top:167px;width:260px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:362px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:194px;width:362px;height:25px;',
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