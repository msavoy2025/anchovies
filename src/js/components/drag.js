jQuery(document).ready(function ($) {
    //GDBD 1-5
    //lightbox1
    var box = $(".lightbox1");


    Draggable.create(box, {
        bounds: "#lightbox_wrap1",
        onPress: offsetBounds,
        onDrag: offsetBounds
    });



    function offsetBounds() {

        // Simulate offset
        var maxX = this.maxX;
        var maxY = this.maxY;

        if (this.x > maxX) TweenLite.set(box, { x: maxX });
        if (this.y > maxY) TweenLite.set(box, { y: maxY });
    }

    //lightbox2
    var box2 = $(".lightbox2");

    Draggable.create(box2, {
        bounds: "#lightbox_wrap2",
        onPress: offsetBounds2,
        onDrag: offsetBounds2
    });

    function offsetBounds2() {

        // Simulate offset
        var maxX2 = this.maxX2;
        var maxY2 = this.maxY2;

        if (this.x > maxX2) TweenLite.set(box2, { x: maxX2 });
        if (this.y > maxY2) TweenLite.set(box2, { y: maxY2 });
    }

    //lightbox3
    var box3 = $(".lightbox3");

    Draggable.create(box3, {
        bounds: "#lightbox_wrap3",
        onPress: offsetBounds3,
        onDrag: offsetBounds3
    });

    function offsetBounds3() {

        // Simulate offset
        var maxX3 = this.maxX3;
        var maxY3 = this.maxY3;

        if (this.x > maxX3) TweenLite.set(box3, { x: maxX3 });
        if (this.y > maxY3) TweenLite.set(box3, { y: maxY3 });
    }

    //lightbox4
    var box4 = $(".lightbox4");

    Draggable.create(box4, {
        bounds: "#lightbox_wrap4",
        onPress: offsetBounds4,
        onDrag: offsetBounds4
    });

    function offsetBounds4() {

        // Simulate offset
        var maxX4 = this.maxX4;
        var maxY4 = this.maxY4;

        if (this.x > maxX4) TweenLite.set(box4, { x: maxX4 });
        if (this.y > maxY4) TweenLite.set(box4, { y: maxY4 });
    }

    //lightbox5
    var box5 = $(".lightbox5");

    Draggable.create(box5, {
        bounds: "#lightbox_wrap5",
        onPress: offsetBounds5,
        onDrag: offsetBounds5
    });

    function offsetBounds5() {

        // Simulate offset
        var maxX5 = this.maxX5;
        var maxY5 = this.maxY5;

        if (this.x > maxX5) TweenLite.set(box5, { x: maxX5 });
        if (this.y > maxY5) TweenLite.set(box5, { y: maxY5 });
    }
    //STR 6-10
    //lightbox6
    var box6 = $(".lightbox6");

    Draggable.create(box6, {
        bounds: "#lightbox_wrap6",
        onPress: offsetBounds6,
        onDrag: offsetBounds6
    });

    function offsetBounds6() {

        // Simulate offset
        var maxX6 = this.maxX6;
        var maxY6 = this.maxY6;

        if (this.x > maxX6) TweenLite.set(box6, { x: maxX6 });
        if (this.y > maxY6) TweenLite.set(box6, { y: maxY6 });
    }

    //lightbox7
    var box7 = $(".lightbox7");

    Draggable.create(box7, {
        bounds: "#lightbox_wrap7",
        onPress: offsetBounds7,
        onDrag: offsetBounds7
    });

    function offsetBounds7() {

        // Simulate offset
        var maxX7 = this.maxX7;
        var maxY7 = this.maxY7;

        if (this.x > maxX7) TweenLite.set(box7, { x: maxX7 });
        if (this.y > maxY7) TweenLite.set(box7, { y: maxY7 });
    }

    //lightbox8
    var box8 = $(".lightbox8");

    Draggable.create(box8, {
        bounds: "#lightbox_wrap8",
        onPress: offsetBounds8,
        onDrag: offsetBounds8
    });

    function offsetBounds8() {

        // Simulate offset
        var maxX8 = this.maxX8;
        var maxY8 = this.maxY8;

        if (this.x > maxX8) TweenLite.set(box8, { x: maxX8 });
        if (this.y > maxY8) TweenLite.set(box8, { y: maxY8 });
    }

    //lightbox9
    var box9 = $(".lightbox9");

    Draggable.create(box9, {
        bounds: "#lightbox_wrap9",
        onPress: offsetBounds9,
        onDrag: offsetBounds9
    });

    function offsetBounds9() {

        // Simulate offset
        var maxX9 = this.maxX9;
        var maxY9 = this.maxY9;

        if (this.x > maxX9) TweenLite.set(box9, { x: maxX9 });
        if (this.y > maxY9) TweenLite.set(box9, { y: maxY9 });
    }

    //lightbox10
    var box10 = $(".lightbox10");

    Draggable.create(box10, {
        bounds: "#lightbox_wrap10",
        onPress: offsetBounds10,
        onDrag: offsetBounds10
    });

    function offsetBounds10() {

        // Simulate offset
        var maxX10 = this.maxX10;
        var maxY10 = this.maxY10;

        if (this.x > maxX10) TweenLite.set(box10, { x: maxX10 });
        if (this.y > maxY10) TweenLite.set(box10, { y: maxY10 });
    }

    //Roman Candle 11-13
    //lightbox11
    var box11 = $(".lightbox11");

    Draggable.create(box11, {
        bounds: "#lightbox_wrap11",
        onPress: offsetBounds11,
        onDrag: offsetBounds11
    });

    function offsetBounds11() {

        // Simulate offset
        var maxX11 = this.maxX11;
        var maxY11 = this.maxY11;

        if (this.x > maxX11) TweenLite.set(box11, { x: maxX11 });
        if (this.y > maxY11) TweenLite.set(box11, { y: maxY11 });
    }

    //lightbox12
    var box12 = $(".lightbox12");

    Draggable.create(box12, {
        bounds: "#lightbox_wrap12",
        onPress: offsetBounds12,
        onDrag: offsetBounds12
    });

    function offsetBounds12() {

        // Simulate offset
        var maxX12 = this.maxX12;
        var maxY12 = this.maxY12;

        if (this.x > maxX12) TweenLite.set(box12, { x: maxX12 });
        if (this.y > maxY12) TweenLite.set(box12, { y: maxY12 });
    }

    //lightbox13
    var box13 = $(".lightbox13");

    Draggable.create(box13, {
        bounds: "#lightbox_wrap13",
        onPress: offsetBounds13,
        onDrag: offsetBounds13
    });

    function offsetBounds13() {

        // Simulate offset
        var maxX13 = this.maxX13;
        var maxY13 = this.maxY13;

        if (this.x > maxX13) TweenLite.set(box13, { x: maxX13 });
        if (this.y > maxY13) TweenLite.set(box13, { y: maxY13 });
    }

    //Thrive 14-15
    //lightbox14
    var box14 = $(".lightbox14");

    Draggable.create(box14, {
        bounds: "#lightbox_wrap14",
        onPress: offsetBounds14,
        onDrag: offsetBounds14
    });

    function offsetBounds14() {

        // Simulate offset
        var maxX14 = this.maxX14;
        var maxY14 = this.maxY14;

        if (this.x > maxX14) TweenLite.set(box14, { x: maxX14 });
        if (this.y > maxY14) TweenLite.set(box14, { y: maxY14 });
    }

    //lightbox15
    var box15 = $(".lightbox15");

    Draggable.create(box15, {
        bounds: "#lightbox_wrap15",
        onPress: offsetBounds15,
        onDrag: offsetBounds15
    });

    function offsetBounds15() {

        // Simulate offset
        var maxX15 = this.maxX15;
        var maxY15 = this.maxY15;

        if (this.x > maxX15) TweenLite.set(box15, { x: maxX15 });
        if (this.y > maxY15) TweenLite.set(box15, { y: maxY15 });
    }

    //Show+Tell 16-18
    //lightbox16
    var box16 = $(".lightbox16");

    Draggable.create(box16, {
        bounds: "#lightbox_wrap16",
        onPress: offsetBounds16,
        onDrag: offsetBounds16
    });

    function offsetBounds16() {

        // Simulate offset
        var maxX16 = this.maxX16;
        var maxY16 = this.maxY16;

        if (this.x > maxX16) TweenLite.set(box16, { x: maxX16 });
        if (this.y > maxY16) TweenLite.set(box16, { y: maxY16 });
    }

    //lightbox17
    var box17 = $(".lightbox17");

    Draggable.create(box17, {
        bounds: "#lightbox_wrap17",
        onPress: offsetBounds17,
        onDrag: offsetBounds17
    });

    function offsetBounds17() {

        // Simulate offset
        var maxX17 = this.maxX17;
        var maxY17 = this.maxY17;

        if (this.x > maxX17) TweenLite.set(box17, { x: maxX17 });
        if (this.y > maxY17) TweenLite.set(box17, { y: maxY17 });
    }

    //lightbox18
    var box18 = $(".lightbox18");

    Draggable.create(box18, {
        bounds: "#lightbox_wrap18",
        onPress: offsetBounds18,
        onDrag: offsetBounds18
    });

    function offsetBounds18() {

        // Simulate offset
        var maxX18 = this.maxX18;
        var maxY18 = this.maxY18;

        if (this.x > maxX18) TweenLite.set(box18, { x: maxX18 });
        if (this.y > maxY18) TweenLite.set(box18, { y: maxY18 });
    }

    //Copper Coyote 19-21
    //lightbox19
    var box19 = $(".lightbox19");

    Draggable.create(box19, {
        bounds: "#lightbox_wrap19",
        onPress: offsetBounds19,
        onDrag: offsetBounds19
    });

    function offsetBounds19() {

        // Simulate offset
        var maxX19 = this.maxX19;
        var maxY19 = this.maxY19;

        if (this.x > maxX19) TweenLite.set(box19, { x: maxX19 });
        if (this.y > maxY19) TweenLite.set(box19, { y: maxY19 });
    }

    //lightbox20
    var box20 = $(".lightbox20");

    Draggable.create(box20, {
        bounds: "#lightbox_wrap20",
        onPress: offsetBounds20,
        onDrag: offsetBounds20
    });

    function offsetBounds20() {

        // Simulate offset
        var maxX20 = this.maxX20;
        var maxY20 = this.maxY20;

        if (this.x > maxX20) TweenLite.set(box20, { x: maxX20 });
        if (this.y > maxY20) TweenLite.set(box20, { y: maxY20 });
    }

    //lightbox21
    var box21 = $(".lightbox21");

    Draggable.create(box21, {
        bounds: "#lightbox_wrap21",
        onPress: offsetBounds21,
        onDrag: offsetBounds21
    });

    function offsetBounds21() {

        // Simulate offset
        var maxX21 = this.maxX21;
        var maxY21 = this.maxY21;

        if (this.x > maxX21) TweenLite.set(box21, { x: maxX21 });
        if (this.y > maxY21) TweenLite.set(box21, { y: maxY21 });
    }

    //Viridian 22-24
    //lightbox22
    var box22 = $(".lightbox22");

    Draggable.create(box22, {
        bounds: "#lightbox_wrap22",
        onPress: offsetBounds22,
        onDrag: offsetBounds22
    });

    function offsetBounds22() {

        // Simulate offset
        var maxX22 = this.maxX22;
        var maxY22 = this.maxY22;

        if (this.x > maxX22) TweenLite.set(box22, { x: maxX22 });
        if (this.y > maxY22) TweenLite.set(box22, { y: maxY22 });
    }

    //lightbox23
    var box23 = $(".lightbox23");

    Draggable.create(box23, {
        bounds: "#lightbox_wrap23",
        onPress: offsetBounds23,
        onDrag: offsetBounds23
    });

    function offsetBounds23() {

        // Simulate offset
        var maxX23 = this.maxX23;
        var maxY23 = this.maxY23;

        if (this.x > maxX23) TweenLite.set(box23, { x: maxX23 });
        if (this.y > maxY23) TweenLite.set(box23, { y: maxY23 });
    }

    //lightbox24
    var box24 = $(".lightbox24");

    Draggable.create(box24, {
        bounds: "#lightbox_wrap24",
        onPress: offsetBounds24,
        onDrag: offsetBounds24
    });

    function offsetBounds24() {

        // Simulate offset
        var maxX24 = this.maxX24;
        var maxY24 = this.maxY24;

        if (this.x > maxX24) TweenLite.set(box24, { x: maxX24 });
        if (this.y > maxY24) TweenLite.set(box24, { y: maxY24 });
    }

    //Parachute 25-26
    //lightbox25
    var box25 = $(".lightbox25");

    Draggable.create(box25, {
        bounds: "#lightbox_wrap25",
        onPress: offsetBounds25,
        onDrag: offsetBounds25
    });

    function offsetBounds25() {

        // Simulate offset
        var maxX25 = this.maxX25;
        var maxY25 = this.maxY25;

        if (this.x > maxX25) TweenLite.set(box25, { x: maxX25 });
        if (this.y > maxY25) TweenLite.set(box25, { y: maxY25 });
    }

    //lightbox26
    var box26 = $(".lightbox26");

    Draggable.create(box26, {
        bounds: "#lightbox_wrap26",
        onPress: offsetBounds26,
        onDrag: offsetBounds26
    });

    function offsetBounds26() {

        // Simulate offset
        var maxX26 = this.maxX26;
        var maxY26 = this.maxY26;

        if (this.x > maxX26) TweenLite.set(box26, { x: maxX26 });
        if (this.y > maxY26) TweenLite.set(box26, { y: maxY26 });
    }
    //Humanly 27-28
    //lightbox27
    var box27 = $(".lightbox27");

    Draggable.create(box27, {
        bounds: "#lightbox_wrap27",
        onPress: offsetBounds27,
        onDrag: offsetBounds27
    });

    function offsetBounds27() {

        // Simulate offset
        var maxX27 = this.maxX27;
        var maxY27 = this.maxY27;

        if (this.x > maxX27) TweenLite.set(box27, { x: maxX27 });
        if (this.y > maxY27) TweenLite.set(box27, { y: maxY27 });
    }

    //lightbox28
    var box28 = $(".lightbox28");

    Draggable.create(box28, {
        bounds: "#lightbox_wrap28",
        onPress: offsetBounds28,
        onDrag: offsetBounds28
    });

    function offsetBounds28() {

        // Simulate offset
        var maxX28 = this.maxX28;
        var maxY28 = this.maxY28;

        if (this.x > maxX28) TweenLite.set(box28, { x: maxX28 });
        if (this.y > maxY28) TweenLite.set(box28, { y: maxY28 });
    }

});


