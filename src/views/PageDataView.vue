<template>
  <div class="PageData">
    <h1>page data setting</h1>

    <el-select v-model="selectedPage">
      <el-option
        v-for="page in pages"
        :key="page"
        :label="page"
        :value="page"
      ></el-option>
    </el-select>

    <component :is="selectedPageComponent"></component>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import ClassesType from "@/components/Uptone/ClassesType.vue";
import TeacherEditor from "@/components/Uptone/TeacherEditor.vue";
import ClassesList from "@/components/Uptone/ClassesList.vue";
import AssociationList from "@/components/Uptone/AssociationList.vue";

const pages = ["ClassesType", "Association", "Class"]

const selectedPage = ref(null)

const pageComponents = {
  ClassesType: ClassesType,
  Association: AssociationList,
  Teacher: TeacherEditor,
  Class: ClassesList,
}

const selectedPageComponent = computed(()=> {
  return pageComponents[selectedPage.value]
})
</script>


<style>
.PageData {
  padding: 20px;
}
</style>