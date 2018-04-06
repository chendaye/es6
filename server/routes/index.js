var express = require('express');
var mockjs = require('mockjs');
var router = express.Router();

// express 的写法


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});


var makeIssue=function(){
  // 日期
  var date = new Date();
  // 第一期的时间
	var first_issue_date = new Date();
  // 小时
	first_issue_date.setHours(9);
  // 分钟
	first_issue_date.setMinutes(10);
  // 秒
	first_issue_date.setSeconds(0);
  // 最后一期  开始时间+77期的时间
	var end_issue_date=new Date(first_issue_date.getTime()+77*10*60*1000);

  // 当前号码  结束时间  状态
	var cur_issue,end_time,state;

  // 正常销售时间段
	if(date.getTime() - first_issue_date.getTime() > 0 && date.getTime() - end_issue_date.getTime() < 0){
		// 正常销售
		var cur_issue_date = new Date();
    // 当期的 小时
		cur_issue_date.setHours(9);
    // 当期的 分钟
		cur_issue_date.setMinutes(0);
    // 当期的 秒
		cur_issue_date.setSeconds(0);
    // 当期已经卖了多久
		var minus_time = date.getTime() - cur_issue_date.getTime();
    // 当期剩余小时
    var h = Math.ceil(minus_time/1000/60/10);
    // 当期结束时间
    var end_date = new Date(cur_issue_date.getTime() + 1000*60*10*h);
    // 结束时间
    end_time = end_date.getTime();
    // 当前期号
    cur_issue = [end_date.getFullYear(),('0'+(end_date.getMonth()+1)).slice(-2),('0'+end_date.getDate()).slice(-2),('0'+h).slice(-2)].join('')
	}else{
		// 今天销售已截止
		var today_end = new Date();
		today_end.setHours(23);
		today_end.setMinutes(59);
		today_end.setSeconds(59);
		
		end_time = first_issue_date.getTime();
		cur_issue = [first_issue_date.getFullYear(),('0'+(first_issue_date.getMonth()+1)).slice(-2),('0'+first_issue_date.getDate()).slice(-2),'01'].join('')
	}
	var cur_date=new Date();
	if(end_time-cur_date.getTime()>1000*60*2){
		state='正在销售'
	}else{
		state='开奖中'
	}
	return {
		issue:cur_issue,
		state:state,
		end_time:end_time
	}
}

/**
 * [模拟遗漏数据的接口]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
router.get('/get/omit',function(req,res,next){
	res.json(mockjs.mock({
		'data|11':[/[1-9]{1,3}|0/],
		'issue':/[1-9]{8}/
	}))
})

/**
 * [模拟开奖号码的接口]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
router.get('/get/opencode',function(req,res,next){
	var issue=makeIssue().issue;
	var data=mockjs.mock({
		'data':[/[1-3]/,/[4-5]/,/[6-7]/,/[8-9]/,/1[0-1]/]
	}).data;
	res.json({
		issue:issue,
		data:data
	})
})

/**
 * [模拟状态的接口]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
router.get('/get/state/',function(req,res,next){
	var state=makeIssue();
	res.json(state);
})
module.exports = router;
