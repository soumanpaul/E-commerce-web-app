const express = require("express");
const authCtrl = require("../controllers/auth.controller");
const userCtrl = require("../controllers/user.controller");
const shopCtrl = require("../controllers/shop.controller");

const router = express.Router();

router
  .route("/by/:userId")
  .post(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    userCtrl.isSeller,
    shopCtrl.create
  );

router.route("/").get(shopCtrl.list);

router.route("/:shopId").get(shopCtrl.read);

router
  .route("/:shopId")
  .delete(authCtrl.requireSignin, shopCtrl.isOwner, shopCtrl.remove);

router
  .route("/:shopId")
  .put(authCtrl.requireSignin, shopCtrl.isOwner, shopCtrl.update);
router
  .route("/by/:userId")
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, shopCtrl.listByOwner);

router.route("/logo/:shopId").get(shopCtrl.photo, shopCtrl.defaultPhoto);
router.route("/defaultphoto").get(shopCtrl.defaultPhoto);

// router
// .route("/logo/:shopId")
// .get(shopCtrl.logo)


router.param("shopId", shopCtrl.shopByID);
router.param("userId", userCtrl.userByID);

module.exports = router;
