export function gettime() {
    // 获取系统时间
    var d = new Date();
    var year = d.getFullYear();
    var mounth = d.getMonth() + 1;
    var day = d.getDate();
    var week = d.getDay()
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    return {
        year,
        mounth,
        day,
        week,
        hour,
        minute,
        second,
    };
}
export function getdays(mounth) {
    // 判断时几月
    var initArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var days = [];
    if (initArr[mounth - 1]) {
        for (var i = 0; i < initArr[mounth - 1]; i++) {
            days.push(i)
        }
        days.splice(0, 1, days.length)
    }
    return days;
}