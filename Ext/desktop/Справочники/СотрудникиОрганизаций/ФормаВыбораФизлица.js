﻿Ext.define('Справочники.СотрудникиОрганизаций.ФормаВыбораФизлица',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:522px;height:209px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список физлиц с похожими данными',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:506px;height:96px;',
			height: 96,width: 506,
			columns:
			[
				{
					text:'',
					width:'34',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'179',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'80',
					dataIndex:'ДатаРождения',
					flex:1,
				},
				{
					text:'ИНН',
					width:'80',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'Страховой номер ПФР',
					width:'120',
					dataIndex:'СтраховойНомерПФР',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ДатаРождения',
					},
					{
						name:'ИНН',
					},
					{
						name:'СтраховойНомерПФР',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: 'Внимание! В информационной базе есть физлица с похожими данными',
			style: 'position:absolute;left:33px;top:8px;width:440px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация1',
			text: 'Если данные по сотруднику ранее не были зарегистрированы, а в списке показаны однофамильцы, выберите команду «Создать новое физлицо»',
			style: 'position:absolute;left:8px;top:130px;width:506px;height:33px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'ВвестиНового',
			text: 'Создать новое физлицо',
			style: 'position:absolute;left:33px;top:173px;width:180px;height:28px;',
		},
		{
			xtype: 'button',
			name: 'Выбрать',
			text: 'Выбрать отмеченное в списке',
			style: 'position:absolute;left:299px;top:173px;width:180px;height:28px;',
		},
	],
	dockedItems:
	[
	]
});