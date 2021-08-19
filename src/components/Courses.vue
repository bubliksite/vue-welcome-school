<template>
  <section id="courses" class="container" v-if="data">
    <h1>{{ data.title }}</h1>
    <div class="row">
      <div
        class="col-md-4 mb-3"
        v-for="(course, index) in data.courses"
        :key="index"
      >
        <div class="card">
          <img :src="course.image" alt="" class="card-img-top" />
          <div class="card-body">
            <div class="author">
              <img :src="iconHat" alt="hat" />
              <span class="ms-3">{{ course.author }}</span>
            </div>
            <p class="title">{{ course.title }}</p>
            <p class="description">{{ course.description }}</p>
            <div class="info">
              <div class="d-flex justify-content-between">
                <div class="mb-2">
                  <BIconLaptop style="color: #bbb" class="me-2" />
                  <small>{{ course.lessonsCount }}</small>
                </div>
                <div class="old-price" v-if="course.discountPrice">
                  <p>{{ course.currentPrice }}</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div>
                  <BIconPeople style="color: #bbb" class="me-2" />
                  <small>{{ course.groupsCount }}</small>
                </div>
                <div class="current-price">
                  <p>
                    {{
                      !course.discountPrice
                        ? course.currentPrice
                        : course.discountPrice
                    }}
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <a href="/#footer" class="btn btn-default mt-3">
                  Записаться
                  <BIconPen class="ms-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {BIconLaptop, BIconPeople, BIconPen} from 'bootstrap-vue'
  import iconHat from '@/assets/icons/Hat.svg'

  export default {
    name: 'Courses',
    components: {BIconLaptop, BIconPeople, BIconPen},
    props: {
      data: Object
    },
    data() {
      return {
        iconHat
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../styles/colors';
  .author {
    span {
      font-size: 14px;
      font-weight: 700;
      color: $color-dark-blue;
    }
  }
  p.title {
    margin: 8px 0;
    color: $color-red;
    font-weight: 700;
    font-size: 22px;
  }
  p.description {
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    min-height: 100px;
  }
  .current-price p {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: $color-dark-blue;
  }
  .old-price p {
    font-size: 14px;
    text-decoration: line-through;
    margin: 0;
  }
</style>
