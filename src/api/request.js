const request = {
  join: "api/user/join",
  login: "api/user/login",
  sns_login: "/api/user/sns/login",
  info: "/api/user/info",
  updateName: "/api/user/update/name",
  leave: "/api/user/leave",
  calendar: "/api/schedule/add",
  myCalendar: "/api/schedule/my",
  addPlan: "/api/mybook/add/plan",
  addRead: "/api/mybook/add/read",
  listPlan: "/api/mybook/list/plan",
  listIng: "/api/mybook/list/ing",
  listRead: "/api/mybook/list/read",
  scheduleDelete: "/api/schedule/delete",
  listDelete: "/api/mybook/delete",
  listComplete: "/api/mybook/status",
  article: "/api/user/article",
  addComment: "/api/onecomment/add",
  articleBook: "/api/article/book",
  commentUpdate: "/api/onecomment/update",
};

export default request;
