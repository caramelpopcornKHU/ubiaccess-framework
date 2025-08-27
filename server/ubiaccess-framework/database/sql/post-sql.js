module.exports = {
  post_list_all: {
    sql: `select id,category,title,contents,createDate,likes,comments,thumbnail
                from test.post`,
  },

  post_list: {
    sql: `select id,user,category,title,contents,createDate,likes,comments,thumbnail
                from test.post`,
    count: `select count(*) as total 
                  from test.post`,
    where: ` where # `,
    order: ` order by # `,
    page: ` limit # `,
  },

  // 좋아요 top5 게시물
  post_list_like_order: {
    sql: `SELECT id,user,title, likes
          FROM test.post
          ORDER BY likes desc
          LIMIT 5`,
  },

  // 좋아요 top4 명 이름
  post_user_list_order_likes: {
    sql: `SELECT unique(USER)
    FROM test.post
    ORDER BY likes DESC
    LIMIT 4`,
  },

  post_read: {
    sql: `select id,category,title,contents,createDate,likes,comments,thumbnail
                from test.post
                where id = :id`,
  },

  //post 데이터 추가
  post_add: {
    sql: `insert into test.post(category,title,contents,createDate,likes,comments,thumbnail) 
            values
            (:category,:title,:contents,:createDate,:likes,:comments,:thumbnail)`,
  },
  //post 데이터 추가_다른종류1
  post_add_vue1: {
    sql: `insert into test.post(user,category,title,contents) 
            values
            (:user,:category,:title,:contents)`,
  },
  //post 데이터 추가_다른종류2
  post_add_vue2: {
    sql: `insert into test.post(user,category,title,contents,thumbnail) 
            values
            (:user,:category,:title,:contents,:thumbnail)`,
  },

  // post 데이터 수정
  post_modify: {
    sql: `update test.post 
                set category = :category, 
                    title = :title,
                    contents = :contents,
                    createDate = :createDate,
                    likes = :likes,
                    comments = :comments,
                    thumbnail = :thumbnail
                where id = :id `,
  },
  // post 데이터 수정
  post_modify_vue1: {
    sql: `update test.post 
                set category = :category,
                    title = :title,
                    contents = :contents
                where id = :id `,
  },
  // post 데이터 수정
  post_modify_vue2: {
    sql: `update test.post 
                set category = :category,
                    title = :title,
                    contents = :contents,
                    thumbnail = :thumbnail
                where id = :id `,
  },

  // 좋아요 데이터 update
  post_like_pressed: {
    sql: `update test.post 
          set likes = likes + 1
          where id = :id `,
  },

  //post 데이터 삭제
  post_remove: {
    sql: `delete from test.post
            where id = :id`,
  },

  // 회원가입
  users_sign_up: {
    sql: `INSERT INTO test.users
          (username,PASSWORD,email)
          VALUES
          (:username,:password,:email)`,
  },
  user_login: {
    sql: `SELECT username, password
          FROM test.users
          WHERE username = :username`,
  },
};
