﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ПорядокСписанияНИОКРНУ
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"cad35922-e877-4152-8291-f310416d002d\", \"Представление\":\"Равномерно\"}")]
		Равномерно = 0,
		[EnumMember(Value = "{\"Ссылка\":\"7c31a0c8-f369-4a48-a769-03b024a66fb0\", \"Представление\":\"ПриПринятииКУчету\"}")]
		ПриПринятииКУчету = 1,//При принятии к учету
		[EnumMember(Value = "{\"Ссылка\":\"c8d2beda-f14e-48c8-974b-490f47a54e46\", \"Представление\":\"НеСписывать\"}")]
		НеСписывать = 2,//Не списывать
	}
	public static partial class ПорядокСписанияНИОКРНУ_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Равномерно = new Guid("10f39182-6d41-2d00-4152-e877cad35922");
		public static readonly Guid ПриПринятииКУчету = new Guid("b00369a7-a624-b06f-4a48-f3697c31a0c8");//При принятии к учету
		public static readonly Guid НеСписывать = new Guid("0f494b97-a547-464e-48c8-f14ec8d2beda");//Не списывать
		public static ПорядокСписанияНИОКРНУ Получить(this ПорядокСписанияНИОКРНУ Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ПорядокСписанияНИОКРНУ Получить(this ПорядокСписанияНИОКРНУ Значение, Guid Ссылка)
		{
			if(Ссылка == Равномерно)
			{
				return ПорядокСписанияНИОКРНУ.Равномерно;
			}
			else if(Ссылка == ПриПринятииКУчету)
			{
				return ПорядокСписанияНИОКРНУ.ПриПринятииКУчету;
			}
			else if(Ссылка == НеСписывать)
			{
				return ПорядокСписанияНИОКРНУ.НеСписывать;
			}
			return ПорядокСписанияНИОКРНУ.ПустаяСсылка;
		}
		public static byte[] Ключ(this ПорядокСписанияНИОКРНУ Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ПорядокСписанияНИОКРНУ Значение)
		{
			switch (Значение)
			{
				case ПорядокСписанияНИОКРНУ.Равномерно: return Равномерно;
				case ПорядокСписанияНИОКРНУ.ПриПринятииКУчету: return ПриПринятииКУчету;
				case ПорядокСписанияНИОКРНУ.НеСписывать: return НеСписывать;
			}
			return Guid.Empty;
		}
	}
}