export const timestampToDateString = (timestamp) => {
  const date = new Date(timestamp);
  const year = `${date.getFullYear()}年`;
  const month = `${date.getMonth() + 1}月`;
  // const day = date.getDate()+'日';
  const formatPart = (value) => (value < 10 ? `0${value}` : `${value}`);
  return `${formatPart(year)}/${formatPart(month)}`;
};

const transfer = (currentDate, format) => {
  const date = new Date(currentDate);
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  if (/(y+)/.test(format)) {
    // eslint-disable-next-line no-param-reassign
    format = format.replace(
      RegExp.$1,
      (`${date.getFullYear()}`).substring(4 - RegExp.$1.length),
    );
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      // eslint-disable-next-line no-param-reassign
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? `${o[k]}`
          : (`00${o[k]}`).substring((`${o[k]}`).length),
      );
    }
  }

  return format;
};

export const dateFormat = (timeSpan, format, formatDateNullValue) => {
  if (!timeSpan) {
    if (formatDateNullValue) {
      return formatDateNullValue;
    }
    return '无';
  }

  const date = new Date(timeSpan);

  return transfer(date, format);
};

export const getHeaderContent = (date) => {
  const currentDate = new Date(date);

  return dateFormat(currentDate, 'yyyy年 MM月');
};

export const getFirstDayOfMonth = (date) => {
  const currentDate = new Date(date);
  currentDate.setDate(1);

  return currentDate;
};
