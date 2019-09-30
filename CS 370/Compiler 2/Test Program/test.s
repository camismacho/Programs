	.file	"test.c"
	.text
	.section	.rodata
.LC0:
	.string	"hello world!"
	.text
	.globl	func
	.type	func, @function
func:
.LFB0:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	movl	$.LC0, %edi
	call	puts
	nop
	popq	%rbp
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	func, .-func
	.section	.rodata
.LC1:
	.string	"second"
.LC2:
	.string	"goodbye"
.LC3:
	.string	"and more"
.LC4:
	.string	"printf call %s %d\n"
.LC5:
	.string	"Hello World!"
	.text
	.globl	main
	.type	main, @function
main:
.LFB1:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	movl	$42, %edx
	movl	$.LC1, %esi
	movl	$.LC2, %edi
	movl	$0, %eax
	call	func
	movl	$53, %edx
	movl	$.LC3, %esi
	movl	$.LC4, %edi
	movl	$0, %eax
	call	printf
	movl	$.LC5, %edi
	call	puts
	movl	$0, %eax
	popq	%rbp
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE1:
	.size	main, .-main
	.ident	"GCC: (SUSE Linux) 7.4.0"
	.section	.note.GNU-stack,"",@progbits
