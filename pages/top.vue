<template>
  <div class="top flex-center">
    <div class="bg-block" ref="isPhysicsballArea"></div>
    <div class="top-message">
      <div class="square-frame">
        <div class="content big-circle flex-center" ref="topCircle">
          <p>
            <span>Yamaguchi</span>
            <span>Sora</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-block {
  width: 100%;
  height: 100%;
  position: absolute;
}
.top {
  position: relative;
  height: 90vh;
  overflow: hidden;
}

.top-message {
  width: 40%;
}

.big-circle {
  border-radius: 50%;
  padding: 20%;
  background-color: aliceblue;
  z-index: 10;
}

.small-circle {
  border-radius: 50%;
  padding: 12%;
  background-color: aliceblue;
}

.content > p > span {
  display: block;
  width: 100%;
}

.content > ul {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul > li {
  position: absolute;
  width: 35%;
  z-index: 1;
}

@media screen and (max-width: 740px) {
  .top-message {
    top: 50%;
    left: 50%;
    min-width: 240px;
    font-size: 2em;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>

<script>
export default {
  //middleware:"PhysicsBall",
  mounted: function() {
    const Matter = require("matter-js");

    const size = {
      width:this.$refs.isPhysicsballArea.clientWidth,
      height:this.$refs.isPhysicsballArea.clientHeight
    }
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

    let engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: this.$refs.isPhysicsballArea,
      engine: engine,
      options: {
        width: size.width,
        height: size.height
      }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    World.add(world, [
      Bodies.rectangle(400, size.height, size.width, 10, { isStatic: true }),
    ]);
    console.log(size.width);

    var stack = Composites.stack(100, 0, 10, 8, 10, 10, function(x, y) {
      return Bodies.circle(x, y, Common.random(15, 30), {
        restitution: 0.6,
        friction: 0.1
      });
    });

    World.add(world, [
      stack
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 }
    });

    // wrapping using matter-wrap plugin
    var allBodies = Composite.allBodies(world);

    for (var i = 0; i < allBodies.length; i += 1) {
      allBodies[i].plugin.wrap = {
        min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
        max: { x: render.bounds.max.x + 100, y: render.bounds.max.y }
      };
    }

    // context for MatterTools.Demo
    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function() {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      }
    };
  }
};
</script>
