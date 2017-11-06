import fetch from 'utils/fetch';
export function getRecommend() {
  return fetch({
    url: '/api/getRecommend',
    method: 'get',
  });
}

export function getDiscList() {
    return fetch({
        url: '/api/getDiscList',
        method: 'get',
    });
}

