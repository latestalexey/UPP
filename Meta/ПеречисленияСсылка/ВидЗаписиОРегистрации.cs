﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВидЗаписиОРегистрации
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"cf63ac66-c014-44a2-8e09-e223fd6b3229\", \"Представление\":\"Регистрация\"}")]
		Регистрация = 0,
		[EnumMember(Value = "{\"Ссылка\":\"fbe393de-00df-4deb-93e1-085538423f9e\", \"Представление\":\"СнятиеСРегистрационногоУчета\"}")]
		СнятиеСРегистрационногоУчета = 1,//Снятие с регистрационного учета
	}
	public static partial class ВидЗаписиОРегистрации_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Регистрация = new Guid("23e2098e-6bfd-2932-44a2-c014cf63ac66");
		public static readonly Guid СнятиеСРегистрационногоУчета = new Guid("5508e193-4238-9e3f-4deb-00dffbe393de");//Снятие с регистрационного учета
		public static ВидЗаписиОРегистрации Получить(this ВидЗаписиОРегистрации Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидЗаписиОРегистрации Получить(this ВидЗаписиОРегистрации Значение, Guid Ссылка)
		{
			if(Ссылка == Регистрация)
			{
				return ВидЗаписиОРегистрации.Регистрация;
			}
			else if(Ссылка == СнятиеСРегистрационногоУчета)
			{
				return ВидЗаписиОРегистрации.СнятиеСРегистрационногоУчета;
			}
			return ВидЗаписиОРегистрации.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидЗаписиОРегистрации Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидЗаписиОРегистрации Значение)
		{
			switch (Значение)
			{
				case ВидЗаписиОРегистрации.Регистрация: return Регистрация;
				case ВидЗаписиОРегистрации.СнятиеСРегистрационногоУчета: return СнятиеСРегистрационногоУчета;
			}
			return Guid.Empty;
		}
	}
}