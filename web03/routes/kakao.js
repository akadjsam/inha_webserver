var express = require('express');
var router = express.Router();

/* GET kakao page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서 검색', pageName:'kakao/book.ejs' });
});

//지역검색 /local에는 앞에 kakao가 생략됨.
router.get('/local', function(req, res, next) {
  res.render('index', { title: '지역 검색', pageName:'kakao/local.ejs' });
});

router.get('/blog', function(req, res, next) {
  res.render('index', { title: '블로그 검색', pageName:'kakao/blog.ejs' });
});

module.exports = router;
