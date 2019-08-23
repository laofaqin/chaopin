import Mock from 'mockjs';

var data=Mock.mock({
	"list|3-5":[
		{
			'name':'@cname()',
			'ID':'@id()',
			'time':'@date()',
			'age':'@natural(0,100)',
			'address':'@county(true)',
			'xingzuo':'@xingzuo()',
			'postcode':'@zip()'
		}
	]
})
Mock.mock('',data)
