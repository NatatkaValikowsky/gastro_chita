function Gallery(obj) {
    this.init(obj);
    this.bind();
}

Gallery.prototype = {

    init: function (obj) {
        var modal = document.createElement('div');
        modal.classList.add('gallery-modal');
        document.body.appendChild(modal);

        for (key in obj) {
            this[key] = obj[key];
        }

        this.modal = modal;
    },

    bind: function () {
        var items = document.querySelectorAll(this.element + ' .item'),
            _context = this;

        items.forEach(function (element) {
            element.addEventListener('click', function () {
                _context.open(_context, element);
            });
        });

        this.modal.addEventListener('click', function (el) {
           _context.close();
        });
    },

    open: function (_context, element) {

        var _imgLink = element.querySelector('img').getAttribute('src'),
            _img = document.createElement('img');

        _img.src = _imgLink.replace('.jpg', '_full.jpg');
        _context.modal.appendChild(_img);

        _context.currImg = _img;

        _context.modal.style.display = "block";
    },

    close:function () {
        this.modal.style.display = "none";
        this.currImg.remove();
        this.currImg = null;
    }
};