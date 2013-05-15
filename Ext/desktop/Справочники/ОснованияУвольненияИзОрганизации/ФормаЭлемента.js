﻿Ext.define('Справочники.ОснованияУвольненияИзОрганизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:378px;height:163px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основание увольнения (статья ТК РФ)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:107px;top:33px;width:263px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекстОснования',
			text: 'Текст основания:',
			style: 'position:absolute;left:8px;top:57px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстОснования',
			style: 'position:absolute;left:8px;top:76px;width:362px;height:54px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:378px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:138px;width:378px;height:25px;',
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