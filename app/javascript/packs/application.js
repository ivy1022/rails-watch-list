// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery　←追加
//= require jquery_ujs　←追加
//= require activestorage
//= require turbolinks
//= require_tree .

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'bootstrap';


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// console.log("Hello from app/javascript/packs/application.js!");
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


$(document).ready(function () {
  $("#images").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'slide',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 3000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
  });
});

import { Swiper } from '../components/swiper';
document.addEventListener('turbolinks:load',() => {
  swiper();
});
