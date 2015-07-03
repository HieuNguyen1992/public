/**
 * START - ONLOAD - JS
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */

/**
 * [showSubMenu description]
 * @param  {[type]} mmenu [description]
 * @return {[type]}       [description]
 */
function showSubMenu (mmenu) {
    if (!$(mmenu).length) {return;}
    if (!$(mmenu).find('.has-child').length) {return;}

    $(mmenu).find('.has-child').each(function(e) {
        $(this).on('mouseover', function (i) {
            $(this).find('.sub-menu' + '.' + $(this).data('lvl')).addClass('show');
        }).on('mouseout', function (i) {
            $(this).find('.sub-menu' + '.' + $(this).data('lvl')).removeClass('show');
        });
    });
}

/**
 * [showMBMenu description]
 * @param  {[type]} mb_menu [description]
 */


function showForm () {
    var body = $('body'),
    formLogin = $('.menu-login.main-menu.tablet-show'),
    formMenu = $('.main-menu.tablet-show');
    var btnLogin = $('.mb-login [data-tgr=".main-menu.tablet-show"]'),
    btnMenu = $('.mb-menu [data-tgr=".main-menu.tablet-show"]');

    btnLogin.off('click').on('click', function (event) {
        event.preventDefault();
        var me = $(this);
        if(me.hasClass('active')){
            me.removeClass('active');
        }
        else{
            me.addClass('active');
            btnMenu.removeClass('active');
        }
    });

    btnMenu.off('click').on('click', function (event) {
        event.preventDefault();
        var me = $(this);
        if(me.hasClass('active')){
            me.removeClass('active');
        }
        else{
            me.addClass('active');
            btnLogin.removeClass('active');
        }
    });

    body.off('click.Body').on('click.Body', function (e) {
        e.preventDefault();
        var me = $(this),
        el = $(e.target);

        if(!el.closest(btnLogin).length && !el.closest('ul.nav').length) {
            btnLogin.removeClass('active');
        }
        if(!el.closest(btnMenu).length && !el.closest('ul.nav').length) {
            btnMenu.removeClass('active');
        }

        var active = me.find('.active');
        if(active.length) {
            me.find('.show').removeClass('show');
            active.parent().find('.main-menu').addClass('show');
        }

        else {
            me.find('.show').removeClass('show');
        }
    });
}
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
jQuery(document).ready(function($){
    showSubMenu('.main-menu.pc-show .mn-menu');

    jQuery('.checkbox').checkbox();
});
/* OnLoad Window */
var init = function () {
    showForm();
};
window.onload = init;
