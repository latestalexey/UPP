﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВидыСтавокЕСНиПФР
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"a69089c6-769c-4edb-be2c-4194ff2c991a\", \"Представление\":\"ДляСельскохозяйственныхПроизводителей\"}")]
		ДляСельскохозяйственныхПроизводителей = 0,//Для сельскохозяйственных производителей
		[EnumMember(Value = "{\"Ссылка\":\"7b2968dc-fe2b-4c78-8023-4386230e71a4\", \"Представление\":\"ДляНеСельскохозяйственныхПроизводителей\"}")]
		ДляНеСельскохозяйственныхПроизводителей = 1,//Для не сельскохозяйственных производителей
	}
	public static partial class ВидыСтавокЕСНиПФР_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ДляСельскохозяйственныхПроизводителей = new Guid("94412cbe-2cff-1a99-4edb-769ca69089c6");//Для сельскохозяйственных производителей
		public static readonly Guid ДляНеСельскохозяйственныхПроизводителей = new Guid("86432380-0e23-a471-4c78-fe2b7b2968dc");//Для не сельскохозяйственных производителей
		public static ВидыСтавокЕСНиПФР Получить(this ВидыСтавокЕСНиПФР Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСтавокЕСНиПФР Получить(this ВидыСтавокЕСНиПФР Значение, Guid Ссылка)
		{
			if(Ссылка == ДляСельскохозяйственныхПроизводителей)
			{
				return ВидыСтавокЕСНиПФР.ДляСельскохозяйственныхПроизводителей;
			}
			else if(Ссылка == ДляНеСельскохозяйственныхПроизводителей)
			{
				return ВидыСтавокЕСНиПФР.ДляНеСельскохозяйственныхПроизводителей;
			}
			return ВидыСтавокЕСНиПФР.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСтавокЕСНиПФР Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСтавокЕСНиПФР Значение)
		{
			switch (Значение)
			{
				case ВидыСтавокЕСНиПФР.ДляСельскохозяйственныхПроизводителей: return ДляСельскохозяйственныхПроизводителей;
				case ВидыСтавокЕСНиПФР.ДляНеСельскохозяйственныхПроизводителей: return ДляНеСельскохозяйственныхПроизводителей;
			}
			return Guid.Empty;
		}
	}
}