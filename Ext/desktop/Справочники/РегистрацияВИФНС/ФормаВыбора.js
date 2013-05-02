﻿Ext.define('Справочники.РегистрацияВИФНС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:548px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Регистрация в ИФНС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:532px;height:259px;',
			height: 259,width: 532,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'48',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'КПП',
					width:'84',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Организация',
					width:'350',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Наименование ИФНС',
					width:'160',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование ИФНС',
					width:'176',
					dataIndex:'НаименованиеИФНС',
					flex:1,
				},
				{
					text:'Представитель',
					width:'160',
					dataIndex:'Представитель',
					flex:1,
				},
				{
					text:'Документ представителя',
					width:'160',
					dataIndex:'ДокументПредставителя',
					flex:1,
				},
				{
					text:'Уполномоченное лицо представителя',
					width:'160',
					dataIndex:'УполномоченноеЛицоПредставителя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияВИФНС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'КПП',
					},
					{
						name:'Владелец',
					},
					{
						name:'Наименование',
					},
					{
						name:'НаименованиеИФНС',
					},
					{
						name:'Представитель',
					},
					{
						name:'ДокументПредставителя',
					},
					{
						name:'УполномоченноеЛицоПредставителя',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
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
					text:'Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
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