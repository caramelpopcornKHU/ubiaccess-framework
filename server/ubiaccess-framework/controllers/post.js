const logger = require("../util/logger");

const Database = require("../database/database_mysql");

const DatabaseHelper = require("../util/database_helper");
const ControllerHelper = require("../util/controller_helper");

const postSql = require("../database/sql/post-sql");

/**
 * @Controller(path='/api/post')
 */
module.exports = class Post {
  constructor() {
    this.database = new Database("database_mysql");

    this.databaseHelper = new DatabaseHelper(this.database);
    this.controllerHelper = new ControllerHelper(this.database);
  }

  ///
  /// 모든 데이터 조회하기
  ///

  /**
   * @RequestMapping(path="/list-all", method="get,post")
   */
  async listAll(req, res) {
    logger.debug(`Post::listAll 호출됨`);

    const sqlName = "post_list_all";
    this.controllerHelper.execute(req, res, sqlName);
  }

  ///
  /// 데이터 조회하기 - 좋아요 순서대로
  ///

  /**
   * @RequestMapping(path="/list-like", method="get,post")
   */
  async listLike(req, res) {
    logger.debug(`Post::listLike 호출됨`);

    const sqlName = "post_list_like_order";
    this.controllerHelper.execute(req, res, sqlName);
  }

  ///
  /// 리스트 조회하기 (페이지 단위로 조회하기)
  ///

  /**
   * @RequestMapping(path="/list", method="get,post")
   */
  async list(req, res) {
    logger.debug(`Post::list 호출됨`);

    const sqlObj = postSql.post_list;
    this.controllerHelper.executeList(req, res, sqlObj);
  }

  ///
  /// 번호로 특정 게시물 호출
  ///

  /**
   * @RequestMapping(path="/read", method="get,post")
   */
  async read(req, res) {
    logger.debug(`Post::read 호출됨`);

    const sqlName = "post_read";
    this.controllerHelper.execute(req, res, sqlName);
  }

  ///
  /// 추가하기
  ///

  /**
   * @RequestMapping(path="/add", method="get,post")
   */
  async add(req, res) {
    logger.debug(`Post::add 호출됨`);

    const sqlName = "post_add";
    this.controllerHelper.execute(req, res, sqlName);
  }
  ///
  /// 추가하기 vue에서 썸네일 X
  ///

  /**
   * @RequestMapping(path="/add/vue1", method="get,post")
   */
  async add1(req, res) {
    logger.debug(`Post::add 호출됨`);

    const sqlName = "post_add_vue1";
    this.controllerHelper.execute(req, res, sqlName);
  }
  ///
  /// 추가하기 vue에서 썸네일 O
  ///

  /**
   * @RequestMapping(path="/add/vue2", method="get,post")
   */
  async add2(req, res) {
    logger.debug(`Post::add 호출됨`);

    const sqlName = "post_add_vue2";
    this.controllerHelper.execute(req, res, sqlName);
  }
  ///
  /// 수정하기
  ///

  /**
   * @RequestMapping(path="/modify", method="get,post")
   */
  async modify(req, res) {
    logger.debug(`Post::modify 호출됨`);

    const sqlName = "post_modify";
    this.controllerHelper.execute(req, res, sqlName);
  }
  ///
  /// 수정하기 vue 썸네일 X
  ///

  /**
   * @RequestMapping(path="/modify/vue1", method="get,post")
   */
  async modify1(req, res) {
    logger.debug(`Post::modify 호출됨`);

    const sqlName = "post_modify_vue1";
    this.controllerHelper.execute(req, res, sqlName);
  }
  ///
  /// 수정하기 vue 썸네일 O
  ///

  /**
   * @RequestMapping(path="/modify/vue2", method="get,post")
   */
  async modify2(req, res) {
    logger.debug(`Post::modify 호출됨`);

    const sqlName = "post_modify_vue2";
    this.controllerHelper.execute(req, res, sqlName);
  }
  ///
  /// 수정하기 좋아요 눌림
  ///

  /**
   * @RequestMapping(path="/modify/like", method="get,post")
   */
  async modifyLike(req, res) {
    logger.debug(`Post::modifyLike 호출됨`);

    const sqlName = "post_like_pressed";
    this.controllerHelper.execute(req, res, sqlName);
  }
  ///
  /// 삭제하기
  ///

  /**
   * @RequestMapping(path="/remove", method="get,post")
   */
  async remove(req, res) {
    logger.debug(`Post::remove 호출됨`);

    const sqlName = "post_remove";
    this.controllerHelper.execute(req, res, sqlName);
  }

  ///
  /// 회원가입
  ///

  /**
   * @RequestMapping(path="/sign-in", method="get,post")
   */
  async signIn(req, res) {
    logger.debug(`Post::signIn 호출됨`);

    const sqlName = "users_sign_in";
    this.controllerHelper.execute(req, res, sqlName);
  }

  ///
  /// 로그인
  ///

  /**
   * @RequestMapping(path="/login", method="get,post")
   */
  async login(req, res) {
    logger.debug(`Post::login 호출됨`);

    const sqlName = "user_login";
    this.controllerHelper.execute(req, res, sqlName);
  }
};
