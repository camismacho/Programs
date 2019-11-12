	.file	"test.c"
	.text
	.comm	x,4,4
	.comm	y,4,4
	.section	.rodata
.LC0:
	.string	"Hello World!\n"
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
	subq	$32, %rsp
	movl	%edi, -4(%rbp)
	movq	%rsi, -16(%rbp)
	movq	%rdx, -24(%rbp)
	movl	$0, x(%rip)
	jmp	.L2
.L3:
	movl	$.LC0, %edi
	call	puts
	movl	x(%rip), %eax
	addl	$1, %eax
	movl	%eax, x(%rip)
.L2:
	movl	x(%rip), %eax
	cmpl	$4, %eax
	jle	.L3
	nop
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	func, .-func
	.ident	"GCC: (SUSE Linux) 7.4.0"
	.section	.note.GNU-stack,"",@progbits
