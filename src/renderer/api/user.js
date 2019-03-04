/**
 * Created by hbb on 2018/10/19.
 */

import seriver from '@/utils/request';

//登录
export function login(params) {
  return seriver({
    url: '/signin',
    method: 'post',
    data: params
  });
}
//注册
export function signup(params) {
  return seriver({
    url: '/signup',
    method: 'post',
    data: params
  });
}

//退出登录
export function signout(params) {
  return seriver({
    url: '/signout',
    method: 'get',
  });
}
//获取首页所有文章
export function getAllPage(params, type) {
  if (type == 1) {
    return seriver({
      url: '/posts/page',
      method: 'post',
      data: params,
    });
  } else {
    return seriver({
      url: '/posts/self/page',
      method: 'post',
      data: params,
    });
  }
}
//删除文章
export function postsRemove(params) {
  return seriver({
    url: '/posts/remove/' + params,
    method: 'delete',
  });
}


//评论
export function comment(params) {
  return seriver({
    url: '/comment',
    method: 'post',
    data: params,
  });
}
//评论分页
export function commentPage(params) {
  return seriver({
    url: '/commentPage',
    method: 'post',
    data: params,
  });
}
//删除评论
export function commentRemove(params) {
  return seriver({
    url: '/comment/remove',
    method: 'post',
    data: params,
  });
}

//发表文章
export function create(params) {
  return seriver({
    url: '/create',
    method: 'post',
    data: params,
  });
}
//编辑文章
export function edit(params) {
  return seriver({
    url: '/posts/edit',
    method: 'put',
    data: params,
  });
}
//获取文章详情
export function getDetail(id) {
  return seriver({
    url: '/postId/' + id,
    method: 'get',
  });
}
//推荐
export function postRecommend(params) {
  return seriver({
    url: '/recommend',
    method: 'post',
    data: params
  });
}
//取消推荐
export function postCancelRecommend(params) {
  return seriver({
    url: '/cancelRecommend',
    method: 'post',
    data: params
  });
}
//获取用户详情

export function get_userInfo(params) {
  return seriver({
    url: '/userInfo',
    method: 'get',
  });
}
//修改用户
export function put_UserInfo(params) {
  return seriver({
    url: '/putUserInfo',
    method: 'put',
    data: params
  });
}
//修改密码
export function put_updateUserPs(params) {
  return seriver({
    url: '/updateUserPs',
    method: 'put',
    data: params
  });
}

