// 格式化时间处理函数

import dayjs from 'dayjs';

/**
 *
 * @param date 时间戳
 */
export default function formatDate ( date ) {
    // 处理时间戳
    return dayjs.unix ( date / 1000 ).format ( 'YYYY-MM-DD HH:mm:ss' );
}
