<template>
    <div class="ClassesTypeEditor">

        <div class="ClassesTypeEditor__block">
            <div class="ClassesTypeEditor__title">type</div>
            <div>
                <el-input v-model="type" class="ClassesTypeEditor__input" placeholder="please input class type name"></el-input>
            </div>
        </div>

        <div class="ClassesTypeEditor__block">
            <div class="ClassesTypeEditor__title">content</div>
            <div v-for="(info, infoIndex) in content" :key="'info'+infoIndex">
                <el-input v-model="content[infoIndex]" class="ClassesTypeEditor__input" placeholder="please input class content info"></el-input>
            </div>
            <el-button @click="addContent">add content</el-button>
        </div>
        
        <div class="ClassesTypeEditor__save">
            <el-button type="primary" @click="cancel">Cancel</el-button>
            <el-button type="primary" @click="save">Save</el-button>
        </div>
    </div>
</template>


<script setup>
import { ref, watch } from "vue";
import { useClassesTypeStore } from "@/stores/classesType";

const props = defineProps({
    classesType: {
        type: Object,
        default: () => ({
            id: '',
            type: '',
            content: []
        })
    },
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['save'])

const { postClassesType, updateClassesType } = useClassesTypeStore();

const type = ref(props.classesType.type);

const content = ref(props.classesType.content);

const addContent = () => {
    content.value.push('');
}

const save = async () => {
    try {
        if (props.isEdit) {
            await updateClassesType({
                id: props.classesType.id,
                type: type.value,
                content: content.value
            })
        } else {
            await postClassesType({
            type: type.value,
            content: content.value
        })
        }

        emit('save')
    } catch (error) {
        console.error(error)
    }
}

const cancel = () => {
    emit('save')
}

watch(() => props.isEdit, () => {
    if (props.isEdit) {
        type.value = props.classesType.type
        content.value = props.classesType.content
    }
}, { immediate: true })
</script>

<style lang="scss">
.ClassesTypeEditor {
    &__block {
        margin-bottom: 20px;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    &__input {
        width: 100%;
        margin-bottom: 10px;
    }

    &__previewImg {
        width: 100%;
        height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }
}
</style>