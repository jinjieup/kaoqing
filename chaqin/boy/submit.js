var _0x103a=['base64','请选择查寝时间！','ajax','value','download','#status_','time_selector','log','Success!','，详情请见附件','err_code','23:00','body','createElement','data',':checked','男生查寝记录','POST','submit_check_time','getElementById','data:text/csv;charset=utf-8,\ufeff','push','length','房号,学生姓名,状态\x0a','.csv'];var _0x162e=function(_0x103a0d,_0x162ec3){_0x103a0d=_0x103a0d-0x0;var _0x6597e8=_0x103a[_0x103a0d];return _0x6597e8;};var name_list=[];var name_room=[];var time_status=0x0;var student_status=[];var data=[];var mail_address='';function submit_data(){submit_check_time();}function submit_check_time(){if(document[_0x162e('0x13')](_0x162e('0x6'))[_0x162e('0x3')]=='22:30'||document['getElementById']('time_selector')['value']==_0x162e('0xb')||document[_0x162e('0x13')]('time_selector')['value']=='00:00'){time_status=0x1;notice_sys(time_status,'submit_check_time');}else{notice_sys(time_status,'submit_check_time');}}function submit_check_student(){for(let _0x45280c=0x0;_0x45280c<name_list['length'];_0x45280c++){for(let _0x4d1ccc=0x1;_0x4d1ccc<=0x4;_0x4d1ccc++){if(_0x4d1ccc==0x1&&$('#status_'+_0x4d1ccc+'_'+name_list[_0x45280c])['is'](_0x162e('0xf'))==!![]){student_status[_0x45280c]='已回';}else if(_0x4d1ccc==0x2&&$(_0x162e('0x5')+_0x4d1ccc+'_'+name_list[_0x45280c])['is'](':checked')==!![]){student_status[_0x45280c]='请假';}else if(_0x4d1ccc==0x3&&$(_0x162e('0x5')+_0x4d1ccc+'_'+name_list[_0x45280c])['is'](':checked')==!![]){student_status[_0x45280c]='留校';}else if(_0x4d1ccc==0x4&&$(_0x162e('0x5')+_0x4d1ccc+'_'+name_list[_0x45280c])['is'](':checked')==!![]){student_status[_0x45280c]='晚归';}}}makeTable();}function notice_sys(_0x2b51f0,_0x5211b0){if(_0x5211b0==_0x162e('0x12')){if(_0x2b51f0==0x1){submit_check_student();}else{alert(_0x162e('0x1'));return 0x0;}}}function makeTable(){var _0x5d8d6c=document[_0x162e('0x13')]('time_selector')['value']+_0x162e('0x10');for(let _0x80ee84=0x0;_0x80ee84<name_list[_0x162e('0x16')];_0x80ee84++){var _0x4c4e42={'room':name_room[_0x80ee84],'name':name_list[_0x80ee84],'status':student_status[_0x80ee84]};data[_0x162e('0x15')](_0x4c4e42);}this['downloadExcel'](data,_0x5d8d6c);}function downloadExcel(_0x33d076,_0x1db358){let _0x23085f=_0x162e('0x17');for(let _0x23cc2d=0x0;_0x23cc2d<_0x33d076[_0x162e('0x16')];_0x23cc2d++){for(let _0x39cb9a in _0x33d076[_0x23cc2d]){_0x23085f+=_0x33d076[_0x23cc2d][_0x39cb9a]+'\x09'+',';}_0x23085f+='\x0a';}let _0x58a56a=_0x162e('0x14')+encodeURIComponent(_0x23085f);let _0x151bce=document[_0x162e('0xd')]('a');_0x151bce['href']=_0x58a56a;_0x151bce[_0x162e('0x4')]=(_0x1db358||'Untitled')+_0x162e('0x18');document[_0x162e('0xc')]['appendChild'](_0x151bce);_0x151bce['click']();document['body']['removeChild'](_0x151bce);}function upload(_0x59da64,_0x576946,_0x41c815){console[_0x162e('0x7')](_0x59da64);var _0x969608=_0x41c815+_0x162e('0x9');$[_0x162e('0x2')]({'type':_0x162e('0x11'),'url':'https://hn216.api.yesapi.cn/api/App/Email/Send','data':{'app_key':'DF2FFBE15C848C37ED338972710EA003','return_data':0x0,'address':mail_address,'title':_0x41c815,'content':_0x969608,'attachments':[{'name':_0x576946,'data':_0x59da64,'encoding':_0x162e('0x0')}],'email_sender':'考勤服务Bot'},'dataType':'json','success':function(_0x2ed17c){if(_0x2ed17c[_0x162e('0xe')][_0x162e('0xa')]==0x0){console[_0x162e('0x7')](_0x162e('0x8'));}else{alert(_0x2ed17c[_0x162e('0xe')]['err_msg']);}}});}function utftobase(_0x4cb133){return window['btoa'](unescape(encodeURIComponent(_0x4cb133)));}