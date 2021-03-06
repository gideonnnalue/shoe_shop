import React from "react";

const mobleSidebar = () => {
  return (
    <div>
      <div class="col-md-3 col-1 pl-0 pr-0 " id="sidebar">
        <div class="list-group border-0 card text-center text-md-left">
          <a
            href="#menu1"
            class="list-group-item d-inline-block collapsed"
            data-toggle="collapse"
            data-parent="#sidebar"
            aria-expanded="false"
          >
            <i class="fa fa-dashboard"></i>{" "}
            <span class="d-none d-md-inline">Item 1</span>{" "}
          </a>
          <div class="collapse" id="menu1">
            <a
              href="#menu1sub1"
              class="list-group-item"
              data-toggle="collapse"
              aria-expanded="false"
            >
              Subitem 1{" "}
            </a>
            <div class="collapse" id="menu1sub1">
              <a href="#" class="list-group-item" data-parent="#menu1sub1">
                Subitem 1 a
              </a>
              <a href="#" class="list-group-item" data-parent="#menu1sub1">
                Subitem 2 b
              </a>
              <a
                href="#menu1sub1sub1"
                class="list-group-item"
                data-toggle="collapse"
                aria-expanded="false"
              >
                Subitem 3 c{" "}
              </a>
              <div class="collapse" id="menu1sub1sub1">
                <a
                  href="#"
                  class="list-group-item"
                  data-parent="#menu1sub1sub1"
                >
                  Subitem 3 c.1
                </a>
                <a
                  href="#"
                  class="list-group-item"
                  data-parent="#menu1sub1sub1"
                >
                  Subitem 3 c.2
                </a>
              </div>
              <a href="#" class="list-group-item" data-parent="#menu1sub1">
                Subitem 4 d
              </a>
              <a
                href="#menu1sub1sub2"
                class="list-group-item"
                data-toggle="collapse"
                aria-expanded="false"
              >
                Subitem 5 e{" "}
              </a>
              <div class="collapse" id="menu1sub1sub2">
                <a
                  href="#"
                  class="list-group-item"
                  data-parent="#menu1sub1sub2"
                >
                  Subitem 5 e.1
                </a>
                <a
                  href="#"
                  class="list-group-item"
                  data-parent="#menu1sub1sub2"
                >
                  Subitem 5 e.2
                </a>
              </div>
            </div>
            <a href="#" class="list-group-item" data-parent="#menu1">
              Subitem 2
            </a>
            <a href="#" class="list-group-item" data-parent="#menu1">
              Subitem 3
            </a>
          </div>

          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-heart"></i>{" "}
            <span class="d-none d-md-inline">Item 2</span>
          </a>
          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-list"></i>{" "}
            <span class="d-none d-md-inline">Item 3</span>
          </a>
          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-clock-o"></i>{" "}
            <span class="d-none d-md-inline">Link</span>
          </a>
          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-th"></i>{" "}
            <span class="d-none d-md-inline">Link</span>
          </a>
          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-gear"></i>{" "}
            <span class="d-none d-md-inline">Link</span>
          </a>
          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-calendar"></i>{" "}
            <span class="d-none d-md-inline">Link</span>
          </a>
          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-envelope"></i>{" "}
            <span class="d-none d-md-inline">Link</span>
          </a>
          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-bar-chart-o"></i>{" "}
            <span class="d-none d-md-inline">Link</span>
          </a>
          <a
            href="#"
            class="list-group-item d-inline-block collapsed"
            data-parent="#sidebar"
          >
            <i class="fa fa-star"></i>{" "}
            <span class="d-none d-md-inline">Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default mobleSidebar;
