﻿Ext.define('MyDesktop.App',
{
    extend: 'Ext.ux.desktop.App',
    requires: [
    'Ext.tab.Panel',
    'Ext.form.field.Text',
    'Ext.form.Label',
    'Ext.form.field.Radio',
    'Ext.form.field.Number',
    'Ext.form.field.Time',
    'Ext.button.Split',
    'Ext.layout.container.Absolute',
    'Ext.toolbar.Toolbar',
    'Ext.toolbar.Fill',
    'Ext.grid.Panel',

        
    'Ext.data.Model',
    'Ext.data.Store',

        //'MyDesktop.ЗагрузкаTab',
        //'MyDesktop.AccordionWindow',
        //'MyDesktop.Notepad',
        //'MyDesktop.BogusMenuModule',
        'MyDesktop.BogusModule',
        
        'Меню.СправочникиФормыЭлемента',
        'Меню.СправочникиФормыСписка',
        'Меню.ДокументыФормыДокумента',
        'Меню.ДокументыФормыСписка',
        'Меню.ОтчетыФормыОтчета',
        'Меню.ОбработкиФормыОбработки',
//        'MyDesktop.Blockalanche',
        'MyDesktop.Settings',
        //'Ext.grid.*',
        //'Ext.data.*',
    ],

    init: function() {

        //Ext.Loader.setConfig({ //Конфигурация загрузчика скриптов
        //    enabled: true,  //Загрузчик активен
        //    disableCaching: true,   //Не кеширует файлы
            //paths: {
            //    Данные: "Данные" //Путь в пространству данных Base
            //}
        //    //paths: {
        //    //    MyDesktop: "desktop" //Путь в пространству данных Base
        //    //}
        //});
        

        this.callParent();
        //alert("Hi for win");
        //        var win1 = desktop.createWindow({
        //            id: 'bogus'+src.windowId,
        //            title:src.text,
        //            width:640,
        //            height:480,
        //            html : '<p>Something useful would be in here.</p>',
        //            iconCls: 'bogus',
        //            animCollapse:false,
        //            constrainHeader: true

        //        });
        //win1.show();

        //var win = Ext.create('Base.Test', {});
        //var win = Ext.create('Base.Test', {
            
        //    //Создаем тестовое окно, определенное в файле Test, файл должен автоматически загрузится     this.tbar = new App.Common.CommonGridTBar({grid:this});
        //    items:[{
        //            xtype:'form',
        //            items:[{
        //            xtype:'textfield',
        //            fieldLabel:'fdsfds'
        //        }]
        //    }]
        //});
        
        //win.show();
        
    },


    getModules: function ()
    {
        return [
            //new MyDesktop.VideoWindow(),
            //new MyDesktop.Blockalanche(),
            //new MyDesktop.SystemStatus(),
            //new MyDesktop.GridWindow(),
            //new MyDesktop.Tovar(),
            //new MyDesktop.Nomenclatura(),
            //new MyDesktop.TabWindow(),
            //new MyDesktop.AccordionWindow(),
            //new MyDesktop.Notepad(),
            //new MyDesktop.BogusMenuModule(),
            //new MyDesktop.BogusModule(),
            //new MyDesktop.BogusMenuModule1(),
            //new MyDesktop.BogusMenuModule2(),
            
            new Меню.СправочникиФормыЭлемента(),
            new Меню.СправочникиФормыСписка(),
            new Меню.ДокументыФормыДокумента(),
            new Меню.ДокументыФормыСписка(),
            new Меню.ОтчетыФормыОтчета(),
            new Меню.ОбработкиФормыОбработки(),
        ];
    },


    getDesktopConfig: function () {
        var me = this,

        ret = me.callParent();

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            //contextMenuItems:
            //[
            //    { text: 'Change Settings', handler: me.onSettings, scope: me }
            //],

            //shortcuts: Ext.create('Ext.data.Store', {
            //    model: 'Ext.ux.desktop.ShortcutModel',
            //    data: [
            //        //{ name: 'Grid Window', iconCls: 'grid-shortcut', module: 'grid-win' },
            //        //{ name: 'Tovar Window', iconCls: 'grid-shortcut', module: 'tovar-win' },
            //        //{ name: 'Номенклатура', iconCls: 'grid-shortcut', module: 'Nomenclatura-win' },
                    


            //        //{ name: 'Accordion Window', iconCls: 'accordion-shortcut', module: 'acc-win' },
            //        //{ name: 'Notepad', iconCls: 'notepad-shortcut', module: 'notepad' },
            //        //{ name: 'System Status', iconCls: 'cpu-shortcut', module: 'systemstatus'}
            //    ]
            //}),

            //wallpaper: 'wallpapers/Blue-Sencha.jpg',
            //wallpaperStretch: false
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Rugut',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'Настройки',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'Выход',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            //quickStart:
            //[
            //    { name: 'Accordion Window', iconCls: 'accordion', module: 'acc-win' },
            //    { name: 'Grid Window', iconCls: 'icon-grid', module: 'grid-win' }
            //],
            trayItems:
            [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    onLogout: function ()
    {
        Ext.Msg.confirm('Logout', 'Хотите выйти?');
    },

    onSettings: function ()
    {
        var dlg = new MyDesktop.Settings
        (
            {
                desktop: this.desktop
            }
        );
        dlg.show();
    }
});


