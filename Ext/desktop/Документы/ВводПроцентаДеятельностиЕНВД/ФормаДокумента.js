﻿Ext.require(['Данные.Документы.ВводПроцентаДеятельностиЕНВД'], function () 
{
	Ext.define('Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:462px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ввод процента деятельности ЕНВД',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:161px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			width: 650,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Редактировать номер',
					tooltip:'Включить возможность редактирования номера документа',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
					tooltip:'',
				},
				'-',
					]
				},
				'-',
				'-',
				{
					text:'',
					tooltip:'Открыть свойства',
				},
				{
					text:'',
					tooltip:'Открыть категории',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:410px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 550,
			height: 19,
			style: 'position:absolute;left:92px;top:410px;width:550px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Период',
			width: 120,
			height: 19,
			style: 'position:absolute;left:126px;top:101px;width:120px;height:19px;',
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:185px;width:634px;height:220px;',
			height: 220,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'157',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Месяц регистрации',
					width:'90',
					dataIndex:'МесяцРегистрации',
					flex:1,
				},
				{
					text:'% ЕНВД-деятельности ',
					width:'63',
					dataIndex:'ПодпадаетПодЕНВД',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто',
					width:'120',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто2',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто3',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатрат',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводПроцентаДеятельностиЕНВД/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'МесяцРегистрации',
					},
					{
						name:'ПодпадаетПодЕНВД',
					},
					{
						name:'СчетДт',
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
						name:'СпособРаспределенияЗатрат',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('РаботникиОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Сотрудники организации',
			style: 'position:absolute;left:8px;top:145px;width:634px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:422px;top:58px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:58px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: '% ЕНВД - деятельности',
			style: 'position:absolute;left:8px;top:82px;width:634px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Регистрируется на:',
			style: 'position:absolute;left:8px;top:101px;width:116px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Месяц регистрации задается для каждой строки табличной части',
			style: 'position:absolute;left:8px;top:122px;width:357px;height:17px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:437px;width:650px;height:25px;',
			width: 650,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'',
				},
				'-',
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});