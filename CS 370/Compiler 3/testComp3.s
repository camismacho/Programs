	.file	"testComp3.c"
	.text
	.comm	x,4,4
	.comm	y,4,4
	.section	.rodata
.LC0:
	.string	"hello world!\n"
.LC1:
	.string	"x=%d\n"
	.text
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	subq	$32, %rsp
	;arguments
	movl	%edi, -4(%rbp)
	movq	%rsi, -16(%rbp)
	movq	%rdx, -24(%rbp)
	;puts function
	movl	$.LC0, %edi
	call	puts
	;x = 42 + 12
	movl	$54, x(%rip)
	movl	x(%rip), %eax
    ;move value in eax to esi
	movl	%eax, %esi
	;printf function
	movl	$.LC1, %edi
	movl	$0, %eax
	call	printf
	nop
	leave

	ret

	.section	.rodata
.LC2:
	.string	"third arg"
.LC3:
	.string	"goodbye"
.LC4:
	.string	"second"
.LC5:
	.string	"goodbye %s %d\n"
.LC6:
	.string	"Hello World!\n"
	.text
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	;func function
	subq	$16, %rsp
	;arguments
	movl	%edi, -4(%rbp)
	movq	%rsi, -16(%rbp)
	movl	$.LC2, %edx
	movl	$.LC3, %esi
	movl	$42, %edi
	call	func
	;printf function
	;load x into eax
	movl	x(%rip), %eax
	;add 48 to x
	addl	$48, %eax
	;move value in eax to edx
	movl	%eax, %edx
	movl	$.LC4, %esi
	movl	$.LC5, %edi
	movl	$0, %eax
	call	printf
	;puts function
	movl	$.LC6, %edi
	call	puts
	movl	$0, %eax
	leave

	ret

